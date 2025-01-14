#!/bin/bash
aws cloudformation create-stack \
    --stack-name test-bucket-stack \
    --template-body file://$(pwd)/bucket.yml \
    --parameters ParameterKey=VPCCidr,ParameterValue=192.168.0.0/16 \
                 ParameterKey=PublicSubnetCidr,ParameterValue=192.168.1.0/24 \
                 ParameterKey=PrivateSubnetCidr,ParameterValue=192.168.2.0/24 \
                 ParameterKey=PrivateDBSubnetCidr,ParameterValue=192.168.3.0/24 \
                 ParameterKey=AvailabilityZone1,ParameterValue=us-east-1a \
                 ParameterKey=AvailabilityZone2,ParameterValue=us-east-1b


