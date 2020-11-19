from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    url_slug = models.CharField(max_length=120, default='url')

    def __str__(self):
        return self.title
