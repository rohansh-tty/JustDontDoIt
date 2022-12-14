# Generated by Django 4.1.1 on 2022-10-02 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="BucketList",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("description", models.TextField(max_length=500)),
                ("completed", models.BooleanField(default=False)),
                ("link", models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name="Todo",
            fields=[
                ("task_id", models.AutoField(primary_key=True, serialize=False)),
                ("title", models.CharField(max_length=100)),
                ("description", models.TextField(max_length=500)),
                ("completed", models.BooleanField(default=False)),
            ],
        ),
    ]
