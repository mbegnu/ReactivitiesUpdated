import { Card, Grid, Header, TabPane } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store'
import ProfileCard from './ProfileCard';
import { observer } from 'mobx-react-lite';

export default observer(function ProfileFollowings() {
    const {profileStore} = useStore();
    const {profile, followings, loadingFolllowings, activeTab} = profileStore;


  return (
    <TabPane loading={loadingFolllowings}>
        <Grid>
            <Grid.Column width={16}>
                <Header 
                    floated='left' 
                    icon='user' 
                    content={activeTab === 3 ? `People following ${profile?.displayName}` : `People ${profile?.displayName} is following` } />
            </Grid.Column>
            <Grid.Column width={16}>
                <Card.Group itemsPerRow={4}>
                    {followings.map(profile => (
                        <ProfileCard key={profile.username} profile={profile} />
                    ))}
                </Card.Group>
            </Grid.Column>
        </Grid>
    </TabPane>
  )
})
