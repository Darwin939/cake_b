# Generated by Django 3.0.7 on 2020-07-11 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0007_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avatar',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
