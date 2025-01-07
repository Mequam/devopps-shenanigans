FROM debian

ADD app/ /code

ADD requirements.txt /code/requirements.txt

RUN apt-get update && apt-get install -y python3 python3-venv

WORKDIR /code

RUN \
python3 -m venv .venv && \
. .venv/bin/activate && \
python3 -m pip install -r requirements.txt

ENTRYPOINT ["/bin/bash","-c", "source ./.venv/bin/activate && python3 manage.py runserver 0.0.0.0:8000"]
