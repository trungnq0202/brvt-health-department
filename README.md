# brvt-health-department
Member:
* Ngo Quang Trung
* Tran Minh Quang
* Tran Thien Van
## Project description
This system is to help manage F0 who receive homecare.  Recently, there are a surge in number of F0 which overloads the health system. Many F0 need to stay home. Therefore, there is a need to have a system to manage F0. This system should allow F0 to self-register or someone will help reigster them (for old patients). F0 will be auto or manually assigned to a doctor.  Everyday, F0 will need to log their vital signs. Everyday, a doctor will login to system and see their patients vital signs. If there is any problem he will recommend the F0 to go to hospital.

## Project installation

### Backend installation
Open each folder by IntelliJ

** NOTE:** we need to install kafka on the local machine and create two topic name: save_doctor and put_doctor

~~~
1. Run `DiscoveryService`
2. Run `API gateway`
3. Run `KafkaService`
4. Run `DoctorService`
5. Run `PatientService`
6. Run `RedisServer`
7. Run `HealthReportService`
8. Run `BlogService`
~~~

### Front end installation
~~~
cd front-end
npm install
npm start
~~~

## Features (the ticked one are the feature we have completed)

**Note**: we use kafka for all service in this project and Redis to store health reports

* [ ] sign in - sign up
* [ ] 3 roles: admin, doctor, f0
* [X] Blog and CRUD operation to Blog 
* F0:
	* [X] allow F0 to self-register
	* [X] allow F0 to report health commondition
  * [X] F0 can see the patient list 
  * [X] F0 Register user
* Doctor
	* [X] See the status of the patient
	* [X] see the list of patients
* Admin:
	* [X] Manage list of patients
	* [X] Manage list of Doctors

## System architecture
The basic architecture for building web applications are monolithic which all of the services will run on one server and share the same database. However, the growth of web applications will require more features to be added to the system and monolithic architecture show its weak points at this stage since adding features can cause many risk to the system dependency and performance. 

On the other hand, an application using microservice architecture will run each process as an microservice and these services will communicate using APIs. Each service is responsible for a particular function of the application. The independent running process of this architecture will increase the performance and scalability of the application and reduce risk when adding new features to the application.

This project will apply the microservice architecture to build a health care system for covid-19 patients and doctors. We using Spring Boot - a web application framework based on java to construct the backend and ReactJs for the UI view. Also, to improve the performance and capacity of the application, we also using Kafka and Readis to handle the communation between application and database. 

## System backend

As mentioned above, we used microservice architecture to build a health care system. From analyzing the system functional requirements. We divided the system into four microservices:

* BRVTAdminService: Authentication features
* BRVTBlogService: Blog features
* BRVTDoctorService: Doctor management features
* BRVTHealthReport: Patient Health Report features
* BRVTPatientService: Patient Management features

### Blog Service
A service responsible to take CRUD action for blog features
#### API LIST: 
1. Get Blog by id
	~~~
	paths:
	/blog/{id}:
		get:
		summary: "GET blog/{id}"
		operationId: "getBlogById"
		parameters:
			- name: "id"
			in: "path"
			required: true
			schema:
				type: "number"
				format: "int32"
		responses:
			"200":
			description: "OK"
	~~~

2. Get all blog posts
	~~~
	aths:
	/blog/findAll:
		get:
		summary: "GET blog/findAll"
		operationId: "findAllBlog"
		responses:
			"200":
			description: "OK"
	~~~

3. Add blog post
	~~~
	paths:
	/blog/add:
		post:
		summary: "POST blog/add"
		operationId: "addBlog"
		responses:
			"200":
			description: "OK"
	~~~

4. Delete blogs
	~~~
	paths:
	/blog/{id}:
		delete:
		summary: "DELETE blog/{id}"
		operationId: "deleteBlog"
		parameters:
			- name: "id"
			in: "path"
			required: true
			schema:
				type: "number"
				format: "int32"
		responses:
			"200":
			description: "OK"
	~~~
### Doctor Service
Responsible for handling list of Doctors and CRUD operation.

#### APIs
1. Find all doctor 
	~~~
	paths:
	/doctor/findAll:
		get:
		summary: "GET doctor/findAll"
		operationId: "findAllDoctors"
		responses:
			"200":
			description: "OK"
	~~~

2. Find doctor by id 
	~~~
	paths:
  	/doctor/{id}:
    get:
      summary: "GET doctor/{id}"
      operationId: "getDoctorById"
      parameters:
        - name: "id"
          in: "path"
          required: true
          schema:
            type: "number"
            format: "int32"
      responses:
        "200":
          description: "OK"
	~~~

3. Add doctor 
~~~
paths:
  /doctor/add:
    post:
      summary: "POST doctor/add"
      operationId: "addDoctor"
      responses:
        "200":
          description: "OK"
~~~

4. Update doctor
~~~
paths:
  /doctor/:
    put:
      summary: "PUT doctor/"
      operationId: "updateDoctor"
      responses:
        "200":
          description: "OK"
~~~
5. Delete Doctor
~~~
paths:
  /doctor/{id}:
    delete:
      summary: "DELETE doctor/{id}"
      operationId: "deleteDoctorById"
      parameters:
        - name: "id"
          in: "path"
          required: true
          schema:
            type: "number"
            format: "int32"
      responses:
        "200":
          description: "OK"
~~~

### Patient Service 
CRUD operation about patient and assign patient to doctor 
#### APIs

1. Get all patient 
~~~
  /patient/findAll:
    get:
      summary: "GET patient/findAll"
      operationId: "findAllPatients"
      responses:
        "200":
          description: "OK"
~~~
2. Get patient by Id 
~~~
  /patient/{id}:
    get:
      summary: "GET patient/{id}"
      operationId: "getPatientById"
      parameters:
      - name: "id"
        in: "path"
        required: true
        schema:
          type: "number"
          format: "int32"
      responses:
        "200":
          description: "OK"
~~~
3. add new patient
~~~
 /patient/add:
    post:
      summary: "POST patient/add"
      operationId: "addPatient"
      responses:
        "200":
          description: "OK"
~~~
4. Update patient
~~~
  /patient/:
    put:
      summary: "PUT patient/"
      operationId: "updatePatient"
      responses:
        "200":
          description: "OK"
~~~
5. Assign patient to doctor
~~~
  /patient/updateAssignedDoctor/{patientId}/{doctorId}:
    post:
      summary: "POST patient/updateAssignedDoctor/{patientId}/{doctorId}"
      operationId: "updateAssignedDoctor"
      parameters:
      - name: "patientId"
        in: "path"
        required: true
        schema:
          type: "number"
          format: "int32"
      - name: "doctorId"
        in: "path"
        required: true
        schema:
          type: "number"
          format: "int32"
      responses:
        "200":
          description: "OK"
~~~
6. Delete patient
~~~
  /patient/{id}:
    delete:
      summary: "DELETE patient/{id}"
      operationId: "deletePatientById"
      parameters:
      - name: "id"
        in: "path"
        required: true
        schema:
          type: "number"
          format: "int32"
      responses:
        "200":
          description: "OK"
~~~
7. get patient status
~~~
/patient/getStatus/{id}:
    get:
      summary: "GET patient/getStatus/{id}"
      operationId: "getStatusById"
      parameters:
      - name: "id"
        in: "path"
        required: true
        schema:
          type: "number"
          format: "int32"
      responses:
        "200":
          description: "OK"
~~~

### Health Report service 
Manage CRUD for health report of the patient

1. Update health reports
~~~
  /health-report/:
    put:
      summary: "PUT health-report/"
      operationId: "updateHealthReport"
      responses:
        "200":
          description: "OK"
~~~

2. Find report by id 
~~~
  /health-report/{id}:
    get:
      summary: "GET health-report/{id}"
      operationId: "getHealthReportById"
      parameters:
      - name: "id"
        in: "path"
        required: true
        schema:
          type: "number"
          format: "int32"
      responses:
        "200":
          description: "OK"
~~~

3. Get report by patient id 
~~~
  /health-report/findAllByPatientId/{id}:
    get:
      summary: "GET health-report/findAllByPatientId/{id}"
      operationId: "findAllHealthReports"
      parameters:
      - name: "id"
        in: "path"
        required: true
        schema:
          type: "number"
          format: "int32"
      responses:
        "200":
          description: "OK"
~~~
4. Add health record
~~~
  /health-report/add:
    post:
      summary: "POST health-report/add"
      operationId: "addHealthReport"
      responses:
        "200":
          description: "OK"
~~~
5. Delete health record 
~~~
  /health-report/{id}:
    delete:
      summary: "DELETE health-report/{id}"
      operationId: "deleteHealthReportById"
      parameters:
      - name: "id"
        in: "path"
        required: true
        schema:
          type: "number"
          format: "int32"
      responses:
        "200":
          description: "OK"
~~~
## Load test 

In this section, we will perform stress testing to the APIs of the service to examine the scalability and availability of the system when facing a large number of user and a lot data. In order to generate stress tests, we using 2 python framworks which are Locust - a famoust and simple framework for load test the API and Faker - a fake data generator framework to push data into the database. 

The Locust framework will allow us to create multiple users to generate hundred to thousand of requests which allow us to evaluate the system performance. 

After conducting serveral test cases, overall, the system can work well from hundreds to thousands of users, although there exist some inscrease in responses time which is expected since we use the free subcribtion of the cloud databases. 

Step to perform the load test 
~~~
cd loadTest

pip install -r requirements.txt

# Runing *Services.py files using Locust command
locust -f fileName.py
~~~

## Application UI list 

- [X] Sign in page
- [X] Sign Up page
- [X] Blog page
- F0 pages:
	- [X] register form for F0 if positive to covid page 
	- [X] Health condition form for F0 to report health condition 
- Doctor pages:
	- [X] See the list of patients page - a list of cards 
	- [X] Check the information and heath condition of the patient page
- Admin pages:
	- [X] Manage list of account and roles
	- [X] Assign the patient to the doctor 