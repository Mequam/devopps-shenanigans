from django.db import models

class Option(models.Model):
    """
    this class represents an option for a quiz
    """
    description = models.CharField(max_length=100,null=False)
    quiz = models.ForeignKey('Quiz',null=False,on_delete=models.CASCADE)
    amount = models.IntegerField(default=0,null=False)
