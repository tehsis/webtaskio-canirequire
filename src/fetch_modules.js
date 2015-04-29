export default function() {
  return $.ajax({
    url: 'https://webtask.it.auth0.com/api/run/wt-tehsis-gmail_com-1',
    method: 'POST',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjIifQ.eyJqdGkiOiIxMDdmNzMzMWFhOTQ0OGE4ODdjZTc4Y2JmN2NhNWE4ZCIsImlhdCI6MTQzMDMyNjU3MCwiY2EiOlsiZDQ3ZDNiMzRkMmI3NGEwZDljYzgwOTg3OGQ3MWQ4Y2QiXSwiZGQiOjAsInVybCI6Imh0dHA6Ly90aGVoc2lzLmdpdGh1Yi5pby93ZWJ0YXNraW8tY2FuaXJlcXVpcmUvdGFza3MvbGlzdF9tb2R1bGVzLmpzIiwidGVuIjoiL153dC10ZWhzaXMtZ21haWxfY29tLVswLTFdJC8ifQ.U6Q-bBqXaopxMwarPw2qPs1UinqGLoFDELKwfXEJMDA'  
    },
  });
}
