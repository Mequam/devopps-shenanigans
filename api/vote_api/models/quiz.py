from django.db import models

class Quiz(models.Model):
    """
    this class represents a series of options that we can vote for on the website and store in the
    database
    """
    description = models.CharField(max_length=100,null=True)
    name = models.CharField(max_length=100,null=True)
