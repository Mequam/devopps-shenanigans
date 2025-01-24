#!/bin/bash
curl -X POST -H "Content-Type: application/json" --data @create_quiz.json http://$TEST_TARGET/quiz/create

