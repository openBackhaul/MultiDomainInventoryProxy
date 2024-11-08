# MultiDomainInventoryProxy
Interface towards the MultiDomainInventory

### Location
The MultiDomainInventoryProxy (MDIP) represents the demarcation towards a higher-layer controller domain.  

### Description
In principle, the MultiDomainInventoryProxy is a transparent passthrough of requests to existing implementations.  

At its south bound interface, it participates at the OperationKeyManagement that is enforcing the approval regime in the Microwave SDN domain.  
At its north bound interface, it implements a 1:1 relationship with the ResourceAdapter implementation of the MultiDomainInventory.  

### Relevance
The MultiDomainInventory is planned to become the major user interface.  

### Resources
- [Specification](./spec/)
- [TestSuite](./testing/)
- [Implementation](./server/)

### Latest Update

The v1.0.2 release adds the following specification changes:  
- update the specification to use the new ApplicationPattern release 2.1.2
- operation client update for MWDI to the latest MWDI spec version 1.2.0

There were no additions or changes to individual services.  

### Comments
./.
