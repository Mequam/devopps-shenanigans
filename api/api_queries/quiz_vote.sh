#!/bin/bash
curl -X POST -d "quiz_id=2" -d "option=no" http://$TEST_TARGET/vote
