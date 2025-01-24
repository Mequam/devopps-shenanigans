#!/bin/bash
curl -X POST -d "quiz_id=8" -d "option='100 duck sized bears'" http://$TEST_TARGET/vote
