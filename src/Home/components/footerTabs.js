import React, { Component } from 'react';
import { Footer, FooterTab } from 'native-base';

class DashboardFooter extends Component {
    render() {
        return(
            <Footer>
              <FooterTab>
                <Button vertical>
                  <Icon name="apps" />
                  <Text>Apps</Text>
                </Button>
                <Button vertical>
                  <Icon name="camera" style={{ color: '#0893CF' }} />
                  <Text style={{ color: '#0893CF' }}>Camera</Text>
                </Button>
                <Button vertical active>
                  <Icon active name="navigate" />
                  <Text>Navigate</Text>
                </Button>
                <Button vertical>
                  <Icon name="person" />
                  <Text>Contact</Text>
                </Button>
              </FooterTab>
            </Footer>
        );
    }
}

export default FooterTab;