from dataclasses import dataclass
from os import name
from faker import Faker 
import random
fake = Faker()
Faker.seed(0)

@dataclass(init=True)
class Blog:
    title: str =  fake.text(max_nb_chars=20)
    content: str = fake.paragraph(nb_sentences=3)
    bookmark: bool = fake.boolean(chance_of_getting_true=50)

    def get_new_instance(self):
        self.title = fake.text(max_nb_chars=20)
        self.content = fake.paragraph(nb_sentences=3)
        self.bookmark = fake.boolean(chance_of_getting_true=50)

@dataclass(init=True)
class Doctor:
    name: str
    address: str
    dateOfBirth: str 
    phoneNumber: str 
    email: str
    password: str
    careerLevel: int

    def get_new_instance(self):
        self.name = fake.name()
        self.address = fake.address()
        self.dateOfBirth = fake.date()
        self.phoneNumber = fake.phone_number()
        self.email = fake.email()
        self.password = fake.password(length=12)
        self.careerLevel = fake.random_digit_not_null()

@dataclass(init=True)
class Patient:
    name: str
    address: str
    dateOfBirth: str 
    phoneNumber: str 
    email: str
    password: str
    status: str
    illness: int
    doctorId: int

    def get_new_instance(self):
        self.name = fake.name()
        self.address = fake.address()
        self.dateOfBirth = fake.date()
        self.phoneNumber = fake.phone_number()
        self.email = fake.email()
        self.password = fake.password(length=12)
        self.illness = fake.random_digit_not_null()
        self.status = fake.word(ext_word_list=['Negative', 'Positive'])


@dataclass(init=True)
class HealthReport:
    status: str
    temperature: int 
    spO2: int
    patientId: int
    description: str
    
    def get_new_instance(self):
        self.status = fake.word(ext_word_list=['Negative', 'Positive'])
        self.temperature = random.randint(36, 40)
        self.spO2 = random.randint(80,100)
        self.patientId = random.randint(1,30)
        self.description = fake.text(max_nb_chars=20)
