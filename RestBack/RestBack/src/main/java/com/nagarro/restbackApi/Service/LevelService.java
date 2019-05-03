package com.nagarro.restbackApi.Service;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.restbackApi.Models.Level;
import com.nagarro.restbackApi.repository.LevelRepository;

@Service
public class LevelService {

	@Autowired
	private LevelRepository levelRepository;
	Logger  logger= Logger.getLogger(LevelService.class.getName());
	
	public List<Level> getAllLevels() {
		return levelRepository.findAll();
	}

	public void addLevel(Level level) {
	logger.info("reached in service");
		if (level.getLevelId()== null || level.getLevelId().equals("")) {
			level.setLevelId(level.generateLevelId());
		}
		levelRepository.save(level);
		
	}

	public void updateLevel(String id,Level newLevel) {
		Level old=levelRepository.getOne(id);
		if(old!=null) 
		{
			newLevel.setLevelId(old.getLevelId());
			newLevel.setLevelNumber(old.getLevelNumber());
			levelRepository.save(newLevel);
		}
		else {
			System.out.println("Error ");
		}
		
	}

	public void deleteLevel(String id) {
		// TODO Auto-generated method stub
		Level old=levelRepository.getOne(id);
		levelRepository.delete(old);
	}

	public Level getLevelById(String id ) {
		System.out.println("hello");
		return levelRepository.findById(id).get();
	}

}
