what webserver will do ?

Web Server Features and Its Role in Web Hosting

Web servers are a remote computers or computer programs that delivers web content (like web pages, etc.) to the end user over the internet upon request through a web browser. It comprises a computer and a server program. Every web server will have an internet protocol(IP) address and domain name through which it is identified over the internet.
1.Ways to deal with files
2.Ways to deal with database
3.Ability to communicate over the internet 
4.ability to accept request and send response



What is the difference between application server and web server?
Web Server is designed to serve HTTP Content. Application Server can also serve HTTP Content but is not limited to just HTTP. It can be provided other protocol support such as RMI/RPC

Web Server is mostly designed to serve static content, though most Web Servers have plugins to support scripting languages like Perl, PHP, ASP, JSP etc. through which these servers can generate dynamic HTTP content.

Most of the application servers have Web Server as integral part of them, that means App Server can do whatever Web Server is capable of. Additionally Application Server have components and features to support Application level services such as Connection Pooling, Object Pooling, Transaction Support, Messaging services etc.

As web servers are well suited for static content and app servers for dynamic content, most of the production environments have web server acting as reverse proxy to app server. That means while service a page request, static contents such as images/Static html is served by web server that interprets the request. Using some kind of filtering technique (mostly extension of requested resource) web server identifies dynamic content request and transparently forwards to app server

Example of such configuration is Apache HTTP Server and BEA WebLogic Server. Apache HTTP Server is Web Server and BEA WebLogic is Application Server.
