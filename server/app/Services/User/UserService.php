<?php
namespace App\Services\User;

use App\Repositories\User\UserInterface;

/**
 * Service class containing the business logic
 */
class UserService
{

    // User repository reference
    protected $userRepo;

    /**
     * Initializing the repository reference with interface
     *
     * @param userInterface $userRepo
     */
    public function __construct(UserInterface $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    /**
     * Method to get user details
     *
     * @param mixed $user
     * @return string
     */
    public function find($user){
        return $this->userRepo->find($user);
    }

    public function get(){
        return $this->userRepo->get();
    }

    public function create($request){
        return $this->userRepo->create($request->all());
    }

    public function update($request){
         return $this->userRepo->update($request->get('id'),$request->all());
    }

    public function destroy($id){
        return $this->userRepo->destroy($id);
    }

}
