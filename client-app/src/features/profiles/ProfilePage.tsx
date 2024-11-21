import { Grid } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { useEffect } from "react";

export default observer(function ProfilePage() {
  const {username} = useParams<{username: string}>();
  const {profileStore} = useStore();
  const {loadProfile, profile, setActiveTab} = profileStore;

  useEffect(() => {
    loadProfile(username!);
     return () => {
       setActiveTab(0);
     }
  }, [loadProfile, username, setActiveTab])

  return (
    <Grid>
        <Grid.Column width={16}>
          {profile && 
            <>
              <ProfileHeader profile = {profile} />
              <ProfileContent profile = {profile} />
            </>
          }
        </Grid.Column>
    </Grid>
  )
})
