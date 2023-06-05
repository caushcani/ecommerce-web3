import Navbar from '@/components/navbar';
import ProfileCard from '@/components/profile-card';
import Web3Provider, { useWeb3Provider } from '@/utils/web3provider';

const Profile = () => {
  return (
    <Web3Provider>
      <ProfileCard />
    </Web3Provider>
  );
};

export default Profile;
