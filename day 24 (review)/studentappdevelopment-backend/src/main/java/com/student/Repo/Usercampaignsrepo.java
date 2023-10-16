package com.student.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.Model.Usercampaigns;

public interface Usercampaignsrepo extends JpaRepository<Usercampaigns,String>  {


  Usercampaigns findCampaignById(String id);



}
