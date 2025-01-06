FROM debian

ADD ../app/ /code

RUN apt-get update && apt-get install -y python3


WORKDIR /code

RUN python -m pip install -r requirements.txt

ENTRYPOINT ["python","app/manage.py","runserver"]
