import dataclasses
from locust import HttpUser, TaskSet, task
from faker import Faker 
import random
from models import *
import json

fake = Faker()
Faker.seed(0)

class WebsiteUser(HttpUser):
    min_wait = 5000
    max_wait = 9000

    @task
    def addDoctor(self):
        data = Patient()
        data.get_new_instance()
        PARAMS = dataclasses.asdict(data)
        self.client.post("patient/add", json = PARAMS)
    
    @task
    def getAllBlog(self):
        self.client.get("findAll")