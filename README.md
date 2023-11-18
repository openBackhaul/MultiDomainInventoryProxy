# MultiDomainInventoryProxy
Interface towards the MultiDomainInventory

### Location
The MultiDomainInventoryProxy (MDIP) represents the demarcation towards a higher-layer controller domain.  

### Description
In principle, the MultiDomainInventoryProxy is a transparent passthrough of requests to existing implementations.  

At its south bound interface, it participates at the OperationKeyManagement that is enforcing the approval regime in the Microwave SDN domain.  
At its north bound interface, it implements a 1:1 connection to the ResourceAdapter implementation of the MultiDomainInventory.  

### Relevance
The MultiDomainInventory is planned to become a major user interface.  

### Resources
- [Specification](./spec/)
- [TestSuite](./testing/)
- [Implementation](./server/)

### Comments
./.
