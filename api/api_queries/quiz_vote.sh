#!/bin/bash
curl -X POST -d "quiz_id=2" -d "option=yes" http://$TEST_TARGET/vote
