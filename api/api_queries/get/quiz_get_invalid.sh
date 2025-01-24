#!/bin/bash
curl -o /dev/null -s -w "%{http_code}\n"  http://$TEST_TARGET/quiz/123123
