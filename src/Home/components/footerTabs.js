import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const DashboardFooter = () => {
    return (
            <Footer style={{ backgroundColor: '#0893CF' }}>
              <FooterTab>
                <Button vertical>
                  <Icon name="card" style={{ color: '#fff'}} />
                  <Text style={{ color: '#fff'}}>Expenses</Text>
                </Button>
                <Button vertical>
                  <Icon name="camera" style={{ color: '#fff'}} />
                  <Text style={{ color: '#fff'}}>Camera</Text>
                </Button>
                <Button vertical active>
                  <Icon name="clipboard" style={{ color: '#fff'}} />
                  <Text style={{ color: '#fff'}}>Reports</Text>
                </Button>
              </FooterTab>
            </Footer>
    )
}

export default DashboardFooter;