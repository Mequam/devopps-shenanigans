#!/bin/bash
curl -X POST -H "Content-Type: application/json" --data @quiz_vote.json http://$TEST_TARGET/vote
