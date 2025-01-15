#!/bin/bash
aws cloudformation create-stack \
    --stack-name test-bucket-stack \
    --template-body file://$(pwd)/project-2-stack.yml \
    --parameters ParameterKey=VPCCidr,ParameterValue=192.168.0.0/16 \
                 ParameterKey=PublicSubnetCidr,ParameterValue=192.168.1.0/24 \
                 ParameterKey=PublicSubnetCidr2,ParameterValue=192.168.4.0/24 \
                 ParameterKey=PrivateSubnetCidr,ParameterValue=192.168.2.0/24 \
                 ParameterKey=PrivateDBSubnetCidr,ParameterValue=192.168.3.0/24 \
                 ParameterKey=AvailabilityZone1,ParameterValue=us-east-1a \
                 ParameterKey=AvailabilityZone2,ParameterValue=us-east-1b \
                 ParameterKey=DBUsername,ParameterValue=vote \
                 ParameterKey=DBPassword,ParameterValue=votevote23blah \
                 ParameterKey=DBPort,ParameterValue=5433



