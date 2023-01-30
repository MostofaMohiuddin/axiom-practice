/* eslint-disable react/style-prop-object */

import {
  Avatar,
  Button,
  Input,
  LayoutGrid,
  LayoutGridCell,
  LayoutGridContainer,
  Link,
  Select,
  Typography,
} from "@optimizely/axiom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Typography type="header1" tag="div" className="push-quad--bottom">
        Profile
      </Typography>

      <LayoutGridContainer className="push-quad--bottom">
        <LayoutGrid>
          <LayoutGridCell
            large={6}
            medium={4}
            small={2}
            xlarge={6}
            className="flex flex-align--center"
          >
            <Avatar className="push-double--right" />
            <Button style="outline" size="small">
              Choose File
            </Button>
          </LayoutGridCell>
          <LayoutGridCell
            large={6}
            medium={4}
            small={2}
            xlarge={6}
            className="soft-double--left"
          >
            <Select isDisabled={false} label="Language">
              <option value="one">English</option>
              <option value="two">Bangla</option>
            </Select>
          </LayoutGridCell>
        </LayoutGrid>
      </LayoutGridContainer>

      <Typography type="header2" tag="div" className="push-quad--bottom">
        Tell us a little about yourself
      </Typography>

      <LayoutGridContainer className="push-double--bottom">
        <LayoutGrid className="push-double--bottom">
          <LayoutGridCell large={6} medium={4} small={2} xlarge={6}>
            <Input
              defaultValue="Mostofa"
              label="First Name"
              max={50}
              maxLength={250}
              min={10}
              placeholder="First Name"
              isRequired
              type="text"
            />
          </LayoutGridCell>
          <LayoutGridCell
            large={6}
            medium={4}
            small={2}
            xlarge={6}
            className="soft-double--left"
          >
            <Input
              defaultValue="Mostofa"
              label="Last Name"
              max={50}
              maxLength={250}
              min={10}
              placeholder="Last Name"
              isRequired
              type="text"
            />
          </LayoutGridCell>
        </LayoutGrid>

        <LayoutGrid className="push-double--bottom">
          <LayoutGridCell large={6} medium={4} small={2} xlarge={6}>
            <Select
              isDisabled={false}
              label="Department"
              isFullWidth
              isRequired
            >
              <option value="one">Developement</option>
              <option value="two">Implementation</option>
            </Select>
          </LayoutGridCell>
          <LayoutGridCell
            large={6}
            medium={4}
            small={2}
            xlarge={6}
            className="soft-double--left"
          >
            <Select isDisabled={false} label="Role" isFullWidth isRequired>
              <option value="one">Developer</option>
              <option value="two">Designer</option>
              <option value="one">Manager</option>
              <option value="two">Director</option>
            </Select>
          </LayoutGridCell>
        </LayoutGrid>

        <LayoutGrid className="push-double--bottom">
          <LayoutGridCell large={6} medium={4} small={2} xlarge={6}>
            <Input
              defaultValue="Bangladesh"
              label="Country"
              max={50}
              maxLength={250}
              min={10}
              placeholder="Country"
              isRequired
              type="text"
            />
          </LayoutGridCell>
          <LayoutGridCell
            large={6}
            medium={4}
            small={2}
            xlarge={6}
            className="soft-double--left"
          >
            <Input
              label="Phone Number"
              max={50}
              maxLength={250}
              min={10}
              placeholder="555-555-5555"
              isRequired
              type="text"
            />
          </LayoutGridCell>
        </LayoutGrid>

        <LayoutGrid className="push-double--bottom">
          <LayoutGridCell large={6} medium={4} small={2} xlarge={6}>
            <Input
              value="mostofa.mohiuddin@optimizely.com"
              label="Email Address"
              max={50}
              maxLength={250}
              min={10}
              placeholder="Email Address"
              isDisabled
              type="text"
            />
          </LayoutGridCell>
          <LayoutGridCell
            large={6}
            medium={4}
            small={2}
            xlarge={6}
            className="soft-double--left"
          >
            <label>
              <Typography type="body" tag="div">
                Password
              </Typography>
            </label>
            <div className="flex flex-align--center push--top">
              <Link href="http://google.com" target="blank" isDisabled={false} style="default">
                Change Password...
              </Link>
            </div>
          </LayoutGridCell>
          <LayoutGridCell large={6} medium={4} small={2} xlarge={6}>
            <Link href="http://google.com" target="blank" isDisabled={false} style="default">
              Change Email Address...
            </Link>
          </LayoutGridCell>
        </LayoutGrid>
      </LayoutGridContainer>
    </div>
  );
}

export default App;
