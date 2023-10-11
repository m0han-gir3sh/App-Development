package com.student.Service;


import com.student.Dto.request.Authenticationrequest;
import com.student.Dto.request.Userregisterrequest;
import com.student.Dto.response.Authenticationresponse;

public interface Authservice {
  boolean userRegistration(Userregisterrequest request);

  Authenticationresponse userAuthentication(Authenticationrequest request);

}
