# Generated by Django 4.2.6 on 2023-10-19 21:09

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='useraccount',
            old_name='name',
            new_name='first_name',
        ),
        migrations.AddField(
            model_name='useraccount',
            name='last_name',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
