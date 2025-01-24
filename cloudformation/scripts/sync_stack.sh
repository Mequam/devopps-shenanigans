#!/bin/bash

STACK_NAME="dak-prok1-stack"

#creates the stack in aws
create_stack() {
aws cloudformation create-stack \
    --stack-name $STACK_NAME \
    --template-body file://$(pwd)/project-2-stack.yml \
    --parameters ParameterKey=VPCCidr,ParameterValue=192.168.0.0/16 \
                 ParameterKey=PublicSubnetCidr,ParameterValue=192.168.1.0/24 \
                 ParameterKey=PublicSubnetCidr2,ParameterValue=192.168.4.0/24 \
                 ParameterKey=PrivateSubnetCidr,ParameterValue=192.168.2.0/24 \
                 ParameterKey=PrivateDBSubnetCidr,ParameterValue=192.168.3.0/24 \
                 ParameterKey=AvailabilityZone1,ParameterValue=us-east-1a \
                 ParameterKey=AvailabilityZone2,ParameterValue=us-east-1b \
                 ParameterKey=InstanceType,ParameterValue=t3.micro \
                 ParameterKey=DBUsername,ParameterValue=$DATABASE_USERNAME \
                 ParameterKey=DBPassword,ParameterValue=$DATABASE_PASSWORD \
                 ParameterKey=DBPort,ParameterValue=$DATABASE_PORT \
                 ParameterKey=DBName,ParameterValue=$DATABASE_NAME \
                 ParameterKey=ServerAllowedHosts,ParameterValue=$ALLOWED_HOST || exit 1
}

delete_stack() {
   aws cloudformation delete-stack --stack-name $STACK_NAME || exit 1
}

#queries aws to get the status of the stack
check_status() {
   STATUS=$(aws cloudformation list-stacks | jq .StackSummaries\[0\].StackStatus | tr -d \")
}

#waits while the status matches the given argument
wait_status() {

   check_status
   echo "[*] $STATUS ..."
   while echo $STATUS | grep $1 >/dev/null; do
      echo -e "\\e[1A\\e[\\[*] $STATUS .  "
      sleep 1
      echo -e "\\e[1A\\e[\\[*] $STATUS .. "
      sleep 1
      echo -e "\\e[1A\\e[\\[*] $STATUS ..."
      sleep 1
      check_status
   done

   echo "[*] stack has moved past $1"
   echo "[*] current state $STATUS"
}

full_create() {
   #ensure the stack is deleted so we can re-create it
   echo $STATUS | grep DELETE_COMPLETE > /dev/null || delete_stack
   sleep 1
   wait_status DELETE_IN_PROGRESS


   #create the stack
   create_stack

   #wait while we are creating the stack
   wait_status CREATE_IN_PROGRESS

   #check the status on the end of create
   if echo $STATUS | grep ROLLBACK > /dev/null
   then
      echo "[*] stack is in rollback state $STATUS"
   elif echo $STATUS | grep COMPLETE > /dev/null
   then
      echo "[*] stack is completed!"
   fi

   echo "[*] exiting with stack status of $STATUS"
}

#delete command
if [[ $1 == "delete" ]]
then
   delete_stack
   wait_status DELETE_IN_PROGRESS
   exit 0
elif [[ $1 == "watch" ]]
then
   wait_status $2
   exit 0
fi

full_create
exit 0
