FROM debian

ADD app/ /code

RUN apt-get update && apt-get install -y python3 python3-psycopg2 python3-django python3-django-cors-headers

WORKDIR /code

ENTRYPOINT ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
