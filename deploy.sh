git add .
echo "Commit message"
read message
git commit -m "${message}"
git push -u origin main
read username
read token
