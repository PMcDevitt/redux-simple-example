echo "!==== Removing UI test failure screenshots ====!"
rm -v test/output/*

sleep 2
echo "start node ***********"
npm run start & NODE_PID=$!

echo "start phantom *********** $!"
./node_modules/.bin/phantomjs --webdriver=4444 --webdriver-loglevel=NONE &
PHANTOM_PID=$!

sleep 2
echo "setting up environment variable to describe the service environment being used for UI tests"
export SERVICE_ENV=local

sleep 5

echo "start acceptance tests ************"
codeceptjs run --steps

killall -9 node
