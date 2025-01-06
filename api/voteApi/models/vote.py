from django.db import models

class Vote(models.Model):
    pk = models.CompositPrimaryKey("quiz_id","user_id","option_id")
    
    quiz = models.ForeignKey("quiz", on_delete=models.CASCADE)
    option = models.ForeignKey("option", on_delete=models.CASCADE)
    user = models.ForeignKey("user", on_delete=models.CASCADE)

