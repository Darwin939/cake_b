# Generated by Django 3.0.7 on 2020-07-22 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='url',
            field=models.TextField(blank=True),
        ),
    ]
