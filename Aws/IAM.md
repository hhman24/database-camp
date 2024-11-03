# IAM Introduction

Tài khoản ROOT không nên sử dụng hằng ngày nên tạo tài khoản con.

IAM users and credentials:

* `Console password`: A password that the IAM user can type to sign in to interactive sessions such as the AWS Management Console
* `Access keys`: Used to make programmatic calls to AWS. However, there are more secure alternatives to consider before you create access keys for IAM users
* `SSH keys for use with CodeCommit`: An SSH public key in the OpenSSH format that can be used to authenticate with CodeCommit.
* `Server certificates`: SSL/TLS certificates that you can use to authenticate with some AWS services. We recommend that you use AWS Certificate Manager (ACM) to provision, manage, and deploy your server certificates

Nên tạo tag. Mục đích, sau này sàn lọc chi phí tài nguyên sau này(recommend for large system).

An IAM user is an identity within your AWS account that has specific permissions for a single person or application
