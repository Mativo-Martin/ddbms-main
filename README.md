## Distriuted Database Project
## Task provided 
create a distributed heterogenous database environment comprising three sites with three different participating database platforms, and at least two operating systems.

Use the above environment to demonstrate your grasp of fragmentation and reconstruction. Thing of a domain area comprising of at least four distributed relations. Write out your applications/reports and use them to perform fragmentation. Come up with query access frequencies of your choice. Allocate the fragments by implementing them physically in the participating databases. Choose one of the sites to be the decision site and perform reconstruction using either views, functions, stored procedures or any other technique.
``
## Overview
This project demonstrates the implementation of a distributed heterogeneous database environment comprising three sites with three different participating database platforms and at least two operating systems. The primary goal is to showcase the understanding of fragmentation and reconstruction in a distributed database system. The chosen domain area includes a set of four distributed relations.

## Project Details
Fragmentation
The project begins by performing fragmentation on the distributed relations. Each relation is divided into fragments based on specific criteria such as query access frequencies. This process is crucial for optimizing data distribution and access across the distributed environment.

## Allocation
Once the fragmentation is complete, the fragments are allocated physically to the participating databases located across the three sites. This allocation ensures that data is distributed effectively to meet performance and availability requirements.

## Decision Site
One of the sites is designated as the decision site. The decision site is responsible for coordinating the reconstruction process. This choice is made based on factors like network connectivity, resource availability, and performance considerations. Site 1 was used as the main desicion site as it performs Global Schema reconstruction from all other sites.
The Site uses Postgresql as its local DBMS. It uses dbLink as its gateway to communicate with other fragments

## Reconstruction
Reconstruction is a critical aspect of the distributed database system. It involves the assembly of fragmented data into a coherent form for query processing. Various techniques such as views, functions, stored procedures, or other methods are employed at the decision site to achieve successful reconstruction.


Contributors
Martin Mativo


