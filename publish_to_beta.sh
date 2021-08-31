npm run build
rm -rf ballcat-ui.tar.gz
tar cvf ballcat-ui.tar.gz dist
scp ballcat-ui.tar.gz root@106.75.185.163:/root/w/compose-hub/web-hub/ballcat/ballcat-ui.tar.gz
ssh root@106.75.185.163 "cd /root/w/compose-hub/web-hub/ballcat/; rm -rf dist"

ssh root@106.75.185.163 "cd /root/w/compose-hub/web-hub/ballcat/; tar -xvf ballcat-ui.tar.gz"
ssh root@106.75.185.163 "cd /root/w/compose-hub/;docker-compose restart common-nginx"
rm -rf ballcat-ui.tar.gz


