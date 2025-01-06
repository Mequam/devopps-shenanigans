from django.db import models

class user(models.Model):
    """
    very simple user class for use with voting, not designed
    for secure login, but just as a skeleton
    """
    username = models.CharField(max_length=50)
    
    def is_anonymous_user(self)->str:
        return self.username == 'anon'
