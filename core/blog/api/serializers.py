from rest_framework import serializers
from blog.models import Article

class ArticleSerializer(serializers.ModelSerializer):

    #url = serializers.SerializerMethodField('get_url_slug')

    class Meta: 
        model = Article
        fields= ('id', 'url_slug', 'title', 'content')

    # def get_url_slug(self, article):
    #     url = article.title.lower().replace(' ', '-')
    #     return url

