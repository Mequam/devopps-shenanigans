from django.db import models

class Vote(models.Model):
    class Meta:
        unique_together = (('quiz','option','user'),)

    quiz = models.ForeignKey("quiz", on_delete=models.CASCADE)
    option = models.ForeignKey("option", on_delete=models.CASCADE)
    user = models.ForeignKey("user", on_delete=models.CASCADE)

