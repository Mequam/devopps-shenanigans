FROM debian

ADD app/ /code

ADD requirements.txt /code/requirements.txt

RUN apt-get update && apt-get install -y python3 python3-psycopg2 python3-django

WORKDIR /code

ENTRYPOINT ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
