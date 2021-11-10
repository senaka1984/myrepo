# myrepo

apiVersion: v1
kind: Service
metadata:
name: bggapp-svc
namespace: bggns
spec:
type: LoadBalancer
ports:

- port: 3000
  targetPort: 3000  
  selector:
  app: bggapp

---
