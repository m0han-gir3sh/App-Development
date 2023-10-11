package com.student.Service;

import java.util.List;

import com.student.Model.Usercampaigns;

public interface Usercampaignservice {


  public boolean saveUsercampaigns(Usercampaigns campaigns);
  public List<Usercampaigns> getAllCampaignsList();


}
