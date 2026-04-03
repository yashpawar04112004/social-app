const http = require('http');

function testAPI() {
  console.log('🧪 Testing API endpoints...\n');

  // Test 1: GET /
  console.log('Test 1: GET /');
  const getOpt = {
    hostname: 'localhost',
    port: 5000,
    path: '/',
    method: 'GET'
  };

  const getReq = http.request(getOpt, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end',() => {
      console.log('✅ Status:', res.statusCode);
      console.log('Response:', data);
      console.log('\n---\n');
      
      // Test 2: POST /api/test
      testPostEndpoint();
    });
  });

  getReq.on('error', (e) => {
    console.error('❌ Error:', e.message);
  });

  getReq.end();
}

function testPostEndpoint() {
  console.log('Test 2: POST /api/test');
  const postData = JSON.stringify({ test: 'data' });

  const postOpt = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/test',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const postReq = http.request(postOpt, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('✅ Status:', res.statusCode);
      console.log('Response:', data);
      console.log('\n---\n');
      
      // Test 3: POST /api/auth/signup
      testSignup();
    });
  });

  postReq.on('error', (e) => {
    console.error('❌ Error:', e.message);
  });

  postReq.write(postData);
  postReq.end();
}

function testSignup() {
  console.log('Test 3: POST /api/auth/signup');
  const signupData = JSON.stringify({
    username: 'testuser3',
    email: 'test3@example.com',
    password: 'password123'
  });

  const signupOpt = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/auth/signup',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(signupData)
    }
  };

  const signupReq = http.request(signupOpt, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('✅ Status:', res.statusCode);
      console.log('Response:', data);
      console.log('\n✅ Testing complete!');
      process.exit(0);
    });
  });

  signupReq.on('error', (e) => {
    console.error('❌ Error:', e.message);
    process.exit(1);
  });

  signupReq.setTimeout(5000, () => {
    console.error('❌ Timeout after 5 seconds');
    signupReq.destroy();
    process.exit(1);
  });

  signupReq.write(signupData);
  signupReq.end();
}

testAPI();