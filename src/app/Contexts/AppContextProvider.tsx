import React from "react";
import { CoinBalanceProvider } from "./CoinBalanceContext";
import { MultitapProvider } from "./MultitapContext";
import { EnergyLimitProvider } from "./EnergyLimitContext";
import { RechargeSpeedProvider } from "./RechargeSpeedContext";
import { WorkingHoursProvider } from "./WorkingHoursContext";
import { SocialTasksProvider } from "./SocialTasksContext";
import { AppUserProvider } from "./AppUserProvider";
import { TankCoinProvider } from "./TankCoinContext";

interface ProviderProps {
  children: React.ReactNode;
}
const AppContextProvider = ({ children }: ProviderProps) => {
  return (
    <AppUserProvider>
      <CoinBalanceProvider>
        <MultitapProvider>
          <EnergyLimitProvider>
            <RechargeSpeedProvider>
              <WorkingHoursProvider>
                <SocialTasksProvider>
                  <TankCoinProvider>
                  {children}
                  </TankCoinProvider>
                  </SocialTasksProvider>
              </WorkingHoursProvider>
            </RechargeSpeedProvider>
          </EnergyLimitProvider>
        </MultitapProvider>
      </CoinBalanceProvider>
    </AppUserProvider>
  );
};

export default AppContextProvider;
