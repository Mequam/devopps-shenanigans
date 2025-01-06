from django.db import models
from .option import Option
import json

class Quiz(models.Model):
    """
    this class represents a series of options that we can vote for on the website and store in the
    database
    """
    description = models.CharField(max_length=100,null=True)
    name = models.CharField(max_length=100,null=True)

    def get_votes(self)->dict:
        """returns a dictionary of vote options and people who have voted for them"""
        
        return { (option.description,option.amount) for option in self.option_set.all() }
    
    def vote(self,option : str)->None:
        """
        votes for an option in the database
        """
        option : Option = self.option_set.get(description=option)
        option.amount += 1
        option.save()
    
    def to_json(self)->dict:
        """
        converts this quiz to a dictionary ready to beam over the interwebs :D
        """
        return json.dumps({
                            "name": self.name,
                            "description": self.description,
                            "options": [vote[0] for vote in self.get_votes()]
                    })


