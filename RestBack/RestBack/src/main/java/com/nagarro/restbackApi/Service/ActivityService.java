package com.nagarro.restbackApi.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.restbackApi.Models.Activity;
import com.nagarro.restbackApi.repository.ActivityRepository;

@Service
public class ActivityService {

	@Autowired
	private ActivityRepository activityRepository;

	public List<Activity> getAllActivities() {
		// TODO Auto-generated method stub
		return	 activityRepository.findAll();
	}

	public Activity getActivityById(String id) {
		// TODO Auto-generated method stub
		return activityRepository.findById(id).get();
	}

	public void addActivity(Activity activity) {
		// TODO Auto-generated method stub
		if ( activity.getActivityId()== null || activity.getActivityId().equals("")) {
			activity.setActivityId(activity.generateActivityId());
		}
		activityRepository.save(activity);
		
	}

	public void updateActivity(String id, Activity newActivity) {
		// TODO Auto-generated method stub
		System.out.println("in update Activity service");
		Activity old=activityRepository.getOne(id);
		if(old!=null) 
		{
			newActivity.setActivityId(old.getActivityId());
			if(newActivity.getBatch().getBatchId().equals("")) {
				newActivity.setBatch(old.getBatch());
			}
			activityRepository.save(newActivity);
		}
		else {
			System.out.println("Error ");
		}
	}

	public void deleteActivity(String id) {
		// TODO Auto-generated method stub
		Activity old=activityRepository.getOne(id);
		System.out.println();
		activityRepository.delete(old);
	}
}
