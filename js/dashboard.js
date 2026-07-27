/*
     * =====================================================
     * REQUIRED SETTINGS
     * =====================================================
     */

    const SCHEDULE_FEED_URL =
      "PASTE_YOUR_APPS_SCRIPT_EXEC_URL_HERE";

    const SCREEN_NAMES = [
      "Arcade",
      "ArcadeWeek",
      "ArcadeSunday",
      "Golf",
      "Slush",
      "infoArcade"
    ];

    const DATA_REFRESH_MS = 30000;
    const LIVE_UPDATE_MS = 1000;
    const SIGNAGE_PAGE = "index.html";

    /*
     * GitHub repository used for unused-image detection.
     * Change only when the repository name or branch changes.
     */
    const GITHUB_REPOSITORY =
      "davynova28/arcadepricefeed";

    const GITHUB_BRANCH =
      "main";

    /*
     * Generated automatically by GitHub Actions.
     * The dashboard tries this lightweight file first and
     * falls back to the GitHub API if it is unavailable.
     */
    const GITHUB_IMAGE_INDEX_FILE =
      "image-index.json";

    /*
     * Player version expected before full rollout.
     * Must match PLAYER_VERSION in index.html.
     */
    const EXPECTED_PLAYER_VERSION =
      "v3.1-heartbeat-1";

    const ROLLOUT_PROGRESS_STORAGE_KEY =
      "miniGolfRolloutProgressV1";

    const DASHBOARD_OFFLINE_STORAGE_KEY =
      "miniGolfDashboardOfflineSnapshotV1";

    const DASHBOARD_OFFLINE_MAX_AGE_MS =
      7 * 24 * 60 * 60 * 1000;

    const LOCAL_DRAFT_STORAGE = {
      regularPrefix:
        "miniGolfScheduleDraft:",

      holidayKey:
        "miniGolfHolidayDraft"
    };

    const SCHEDULE_TEMPLATE_STORAGE_KEY =
      "miniGolfScheduleTemplates";

    /*
     * =====================================================
     * BRAND SETTINGS
     * =====================================================
     */

    const DASHBOARD_BRAND = {
      title: "Mini Golf Signage",
      subtitle: "Control Center · Dashboard V3",

      primaryColor: "#5fa8ff",
      secondaryColor: "#36c987",
      holidayColor: "#f2aa3f",
      errorColor: "#ff6868",

      logoFile: "dashboard-logo.png"
    };

    /*
     * =====================================================
     * THEME SETTINGS
     * =====================================================
     */

    const DASHBOARD_THEME = {
      lightModeStartsAt: 7,
      darkModeStartsAt: 19,

      storageKey:
        "miniGolfDashboardTheme"
    };

    /*
     * =====================================================
     * ELEMENT REFERENCES
     * =====================================================
     */

    const dashboardTitle =
      document.getElementById(
        "dashboardTitle"
      );

    const dashboardSubtitle =
      document.getElementById(
        "dashboardSubtitle"
      );

    const dashboardLogo =
      document.getElementById(
        "dashboardLogo"
      );

    const screenGrid =
      document.getElementById(
        "screenGrid"
      );

    const upcomingList =
      document.getElementById(
        "upcomingList"
      );

    const refreshButton =
      document.getElementById(
        "refreshButton"
      );

    const lastRefreshElement =
      document.getElementById(
        "lastRefresh"
      );

    const screenCountElement =
      document.getElementById(
        "screenCount"
      );

    const loadedCountElement =
      document.getElementById(
        "loadedCount"
      );

    const regularCountElement =
      document.getElementById(
        "regularCount"
      );

    const holidayCountElement =
      document.getElementById(
        "holidayCount"
      );

    const errorCountElement =
      document.getElementById(
        "errorCount"
      );

    const healthDot =
      document.getElementById(
        "healthDot"
      );

    const healthTitle =
      document.getElementById(
        "healthTitle"
      );

    const healthDescription =
      document.getElementById(
        "healthDescription"
      );

    const offlineModeBanner =
      document.getElementById(
        "offlineModeBanner"
      );

    const offlineModeDescription =
      document.getElementById(
        "offlineModeDescription"
      );

    const offlineModeAge =
      document.getElementById(
        "offlineModeAge"
      );

    const globalNextChange =
      document.getElementById(
        "globalNextChange"
      );

    const operationsGreeting =
      document.getElementById(
        "operationsGreeting"
      );

    const operationsDate =
      document.getElementById(
        "operationsDate"
      );

    const operationsClock =
      document.getElementById(
        "operationsClock"
      );

    const operationsScreens =
      document.getElementById(
        "operationsScreens"
      );

    const operationsHoliday =
      document.getElementById(
        "operationsHoliday"
      );

    const operationsHolidayDetail =
      document.getElementById(
        "operationsHolidayDetail"
      );

    const operationsChanges =
      document.getElementById(
        "operationsChanges"
      );

    const operationsFirst =
      document.getElementById(
        "operationsFirst"
      );

    const operationsFirstDetail =
      document.getElementById(
        "operationsFirstDetail"
      );

    const operationsLast =
      document.getElementById(
        "operationsLast"
      );

    const operationsLastDetail =
      document.getElementById(
        "operationsLastDetail"
      );

    const operationsNext =
      document.getElementById(
        "operationsNext"
      );

    const operationsNextDetail =
      document.getElementById(
        "operationsNextDetail"
      );

    const themeButton =
      document.getElementById(
        "themeButton"
      );

    const themeButtonIcon =
      document.getElementById(
        "themeButtonIcon"
      );

    const themeButtonText =
      document.getElementById(
        "themeButtonText"
      );

    const homeTab =
      document.getElementById(
        "homeTab"
      );

    const homeWorkspace =
      document.getElementById(
        "homeWorkspace"
      );

    const missionHeroHealth =
      document.getElementById(
        "missionHeroHealth"
      );

    const missionHeroHealthScore =
      document.getElementById(
        "missionHeroHealthScore"
      );

    const missionHeroHealthState =
      document.getElementById(
        "missionHeroHealthState"
      );

    const missionStatusUpdated =
      document.getElementById(
        "missionStatusUpdated"
      );

    const missionAppsScriptCard =
      document.getElementById(
        "missionAppsScriptCard"
      );

    const missionAppsScriptValue =
      document.getElementById(
        "missionAppsScriptValue"
      );

    const missionAppsScriptDetail =
      document.getElementById(
        "missionAppsScriptDetail"
      );

    const missionGitHubCard =
      document.getElementById(
        "missionGitHubCard"
      );

    const missionGitHubValue =
      document.getElementById(
        "missionGitHubValue"
      );

    const missionGitHubDetail =
      document.getElementById(
        "missionGitHubDetail"
      );

    const missionPlayersCard =
      document.getElementById(
        "missionPlayersCard"
      );

    const missionPlayersValue =
      document.getElementById(
        "missionPlayersValue"
      );

    const missionPlayersDetail =
      document.getElementById(
        "missionPlayersDetail"
      );

    const missionCacheCard =
      document.getElementById(
        "missionCacheCard"
      );

    const missionCacheValue =
      document.getElementById(
        "missionCacheValue"
      );

    const missionCacheDetail =
      document.getElementById(
        "missionCacheDetail"
      );

    const missionBackupCard =
      document.getElementById(
        "missionBackupCard"
      );

    const missionBackupValue =
      document.getElementById(
        "missionBackupValue"
      );

    const missionBackupDetail =
      document.getElementById(
        "missionBackupDetail"
      );

    const missionSchedulesCard =
      document.getElementById(
        "missionSchedulesCard"
      );

    const missionSchedulesValue =
      document.getElementById(
        "missionSchedulesValue"
      );

    const missionSchedulesDetail =
      document.getElementById(
        "missionSchedulesDetail"
      );

    const missionGreeting =
      document.getElementById(
        "missionGreeting"
      );

    const missionScheduleActionStatus =
      document.getElementById(
        "missionScheduleActionStatus"
      );

    const missionImagesActionStatus =
      document.getElementById(
        "missionImagesActionStatus"
      );

    const missionHealthActionStatus =
      document.getElementById(
        "missionHealthActionStatus"
      );

    const missionRolloutActionStatus =
      document.getElementById(
        "missionRolloutActionStatus"
      );

    const controlCenterTab =
      document.getElementById(
        "controlCenterTab"
      );

    const scheduleManagerTab =
      document.getElementById(
        "scheduleManagerTab"
      );

    const controlCenterWorkspace =
      document.getElementById(
        "controlCenterWorkspace"
      );

    const scheduleManagerWorkspace =
      document.getElementById(
        "scheduleManagerWorkspace"
      );

    const holidayManagerTab =
      document.getElementById(
        "holidayManagerTab"
      );

    const holidayManagerWorkspace =
      document.getElementById(
        "holidayManagerWorkspace"
      );

    const holidayScreenFilter =
      document.getElementById(
        "holidayScreenFilter"
      );

    const holidayStatusFilter =
      document.getElementById(
        "holidayStatusFilter"
      );

    const reloadHolidayButton =
      document.getElementById(
        "reloadHolidayButton"
      );

    const holidayTotalCount =
      document.getElementById(
        "holidayTotalCount"
      );

    const holidayActiveCount =
      document.getElementById(
        "holidayActiveCount"
      );

    const holidayUpcomingCount =
      document.getElementById(
        "holidayUpcomingCount"
      );

    const holidayInvalidCount =
      document.getElementById(
        "holidayInvalidCount"
      );

    const holidayTableBody =
      document.getElementById(
        "holidayTableBody"
      );

    const holidayModeStatus =
      document.getElementById(
        "holidayModeStatus"
      );

    const holidayEditButton =
      document.getElementById(
        "holidayEditButton"
      );

    const holidayAddRowButton =
      document.getElementById(
        "holidayAddRowButton"
      );

    const holidayDiscardButton =
      document.getElementById(
        "holidayDiscardButton"
      );

    const holidaySaveButton =
      document.getElementById(
        "holidaySaveButton"
      );

    const holidayDirtyIndicator =
      document.getElementById(
        "holidayDirtyIndicator"
      );

    const holidayValidation =
      document.getElementById(
        "holidayValidation"
      );

    const holidaySaveMessage =
      document.getElementById(
        "holidaySaveMessage"
      );

    const holidayRepositoryWarning =
      document.getElementById(
        "holidayRepositoryWarning"
      );

    const holidaySaveForm =
      document.getElementById(
        "holidaySaveForm"
      );

    const holidaySavePinField =
      document.getElementById(
        "holidaySavePinField"
      );

    const holidaySaveDataField =
      document.getElementById(
        "holidaySaveDataField"
      );

    const holidaySaveRequestIdField =
      document.getElementById(
        "holidaySaveRequestIdField"
      );

    const backupHistoryTab =
      document.getElementById(
        "backupHistoryTab"
      );

    const backupHistoryWorkspace =
      document.getElementById(
        "backupHistoryWorkspace"
      );

    const backupTypeFilter =
      document.getElementById(
        "backupTypeFilter"
      );

    const backupScreenFilter =
      document.getElementById(
        "backupScreenFilter"
      );

    const reloadBackupsButton =
      document.getElementById(
        "reloadBackupsButton"
      );

    const backupTotalCount =
      document.getElementById(
        "backupTotalCount"
      );

    const backupRegularCount =
      document.getElementById(
        "backupRegularCount"
      );

    const backupHolidayCount =
      document.getElementById(
        "backupHolidayCount"
      );

    const backupLatestTime =
      document.getElementById(
        "backupLatestTime"
      );

    const backupTableBody =
      document.getElementById(
        "backupTableBody"
      );

    const backupDetails =
      document.getElementById(
        "backupDetails"
      );

    const backupDetailsTitle =
      document.getElementById(
        "backupDetailsTitle"
      );

    const backupDetailsJson =
      document.getElementById(
        "backupDetailsJson"
      );

    const closeBackupDetailsButton =
      document.getElementById(
        "closeBackupDetailsButton"
      );

    const prepareRestoreButton =
      document.getElementById(
        "prepareRestoreButton"
      );

    const restorePreview =
      document.getElementById(
        "restorePreview"
      );

    const closeRestorePreviewButton =
      document.getElementById(
        "closeRestorePreviewButton"
      );

    const imageLibraryTab =
      document.getElementById(
        "imageLibraryTab"
      );

    const imageLibraryWorkspace =
      document.getElementById(
        "imageLibraryWorkspace"
      );

    const imageLibrarySearch =
      document.getElementById(
        "imageLibrarySearch"
      );

    const imageLibrarySourceFilter =
      document.getElementById(
        "imageLibrarySourceFilter"
      );

    const imageLibraryScreenFilter =
      document.getElementById(
        "imageLibraryScreenFilter"
      );

    const reloadImageLibraryButton =
      document.getElementById(
        "reloadImageLibraryButton"
      );

    const imageLibraryUniqueCount =
      document.getElementById(
        "imageLibraryUniqueCount"
      );

    const imageLibraryUsageCount =
      document.getElementById(
        "imageLibraryUsageCount"
      );

    const imageLibraryRegularCount =
      document.getElementById(
        "imageLibraryRegularCount"
      );

    const imageLibraryHolidayCount =
      document.getElementById(
        "imageLibraryHolidayCount"
      );

    const imageLibraryGrid =
      document.getElementById(
        "imageLibraryGrid"
      );

    const scanImageHealthButton =
      document.getElementById(
        "scanImageHealthButton"
      );

    const clearImageHealthButton =
      document.getElementById(
        "clearImageHealthButton"
      );

    const imageHealthStatus =
      document.getElementById(
        "imageHealthStatus"
      );

    const repositoryImageCount =
      document.getElementById(
        "repositoryImageCount"
      );

    const missingImageCount =
      document.getElementById(
        "missingImageCount"
      );

    const unusedImageCount =
      document.getElementById(
        "unusedImageCount"
      );

    const imageHealthList =
      document.getElementById(
        "imageHealthList"
      );

    const imagePickerDialog =
      document.getElementById(
        "imagePickerDialog"
      );

    const closeImagePickerButton =
      document.getElementById(
        "closeImagePickerButton"
      );

    const imagePickerSearch =
      document.getElementById(
        "imagePickerSearch"
      );

    const imagePickerGrid =
      document.getElementById(
        "imagePickerGrid"
      );

    const auditLogTab =
      document.getElementById(
        "auditLogTab"
      );

    const auditLogWorkspace =
      document.getElementById(
        "auditLogWorkspace"
      );

    const auditActionFilter =
      document.getElementById(
        "auditActionFilter"
      );

    const auditStatusFilter =
      document.getElementById(
        "auditStatusFilter"
      );

    const auditDestinationFilter =
      document.getElementById(
        "auditDestinationFilter"
      );

    const reloadAuditButton =
      document.getElementById(
        "reloadAuditButton"
      );

    const auditTotalCount =
      document.getElementById(
        "auditTotalCount"
      );

    const auditSuccessCount =
      document.getElementById(
        "auditSuccessCount"
      );

    const auditErrorCount =
      document.getElementById(
        "auditErrorCount"
      );

    const auditLatestTime =
      document.getElementById(
        "auditLatestTime"
      );

    const auditTableBody =
      document.getElementById(
        "auditTableBody"
      );

    const holidayCalendarTab =
      document.getElementById(
        "holidayCalendarTab"
      );

    const holidayCalendarWorkspace =
      document.getElementById(
        "holidayCalendarWorkspace"
      );

    const previousCalendarMonthButton =
      document.getElementById(
        "previousCalendarMonthButton"
      );

    const todayCalendarButton =
      document.getElementById(
        "todayCalendarButton"
      );

    const nextCalendarMonthButton =
      document.getElementById(
        "nextCalendarMonthButton"
      );

    const reloadCalendarButton =
      document.getElementById(
        "reloadCalendarButton"
      );

    const calendarMonthLabel =
      document.getElementById(
        "calendarMonthLabel"
      );

    const holidayCalendarGrid =
      document.getElementById(
        "holidayCalendarGrid"
      );

    const calendarDetails =
      document.getElementById(
        "calendarDetails"
      );

    const calendarDetailsTitle =
      document.getElementById(
        "calendarDetailsTitle"
      );

    const calendarDetailsList =
      document.getElementById(
        "calendarDetailsList"
      );

    const closeCalendarDetailsButton =
      document.getElementById(
        "closeCalendarDetailsButton"
      );

    const compatibilityAuditTab =
      document.getElementById(
        "compatibilityAuditTab"
      );

    const compatibilityAuditWorkspace =
      document.getElementById(
        "compatibilityAuditWorkspace"
      );

    const runCompatibilityAuditButton =
      document.getElementById(
        "runCompatibilityAuditButton"
      );

    const compatibilityAuditStatus =
      document.getElementById(
        "compatibilityAuditStatus"
      );

    const compatibilityPassCount =
      document.getElementById(
        "compatibilityPassCount"
      );

    const compatibilityWarningCount =
      document.getElementById(
        "compatibilityWarningCount"
      );

    const compatibilityErrorCount =
      document.getElementById(
        "compatibilityErrorCount"
      );

    const compatibilityOverallState =
      document.getElementById(
        "compatibilityOverallState"
      );

    const compatibilityAuditList =
      document.getElementById(
        "compatibilityAuditList"
      );

    const dailyScheduleCalendarTab =
      document.getElementById(
        "dailyScheduleCalendarTab"
      );

    const dailyScheduleCalendarWorkspace =
      document.getElementById(
        "dailyScheduleCalendarWorkspace"
      );

    const dailyCalendarNowButton =
      document.getElementById(
        "dailyCalendarNowButton"
      );

    const dailyCalendarReloadButton =
      document.getElementById(
        "dailyCalendarReloadButton"
      );

    const dailyCalendarStartHour =
      document.getElementById(
        "dailyCalendarStartHour"
      );

    const dailyCalendarWrap =
      document.getElementById(
        "dailyCalendarWrap"
      );

    const dailyCalendarGrid =
      document.getElementById(
        "dailyCalendarGrid"
      );

    const dailyCalendarDetails =
      document.getElementById(
        "dailyCalendarDetails"
      );

    const dailyCalendarDetailsTitle =
      document.getElementById(
        "dailyCalendarDetailsTitle"
      );

    const dailyCalendarDetailsScreen =
      document.getElementById(
        "dailyCalendarDetailsScreen"
      );

    const dailyCalendarDetailsStart =
      document.getElementById(
        "dailyCalendarDetailsStart"
      );

    const dailyCalendarDetailsEnd =
      document.getElementById(
        "dailyCalendarDetailsEnd"
      );

    const dailyCalendarDetailsType =
      document.getElementById(
        "dailyCalendarDetailsType"
      );

    const dailyCalendarDetailsDescription =
      document.getElementById(
        "dailyCalendarDetailsDescription"
      );

    const closeDailyCalendarDetailsButton =
      document.getElementById(
        "closeDailyCalendarDetailsButton"
      );


    const systemHealthTab = document.getElementById("systemHealthTab");
    const systemHealthWorkspace = document.getElementById("systemHealthWorkspace");
    const refreshSystemHealthButton = document.getElementById("refreshSystemHealthButton");
    const healthOverallState = document.getElementById("healthOverallState");
    const healthLastUpdated = document.getElementById("healthLastUpdated");
    const healthRequestCount = document.getElementById("healthRequestCount");
    const healthSuccessRate = document.getElementById("healthSuccessRate");
    const healthCacheHitRate = document.getElementById("healthCacheHitRate");
    const healthAverageResponse = document.getElementById("healthAverageResponse");
    const healthSuccessCount = document.getElementById("healthSuccessCount");
    const healthFailureCount = document.getElementById("healthFailureCount");
    const healthMaxResponse = document.getElementById("healthMaxResponse");
    const healthLastRequest = document.getElementById("healthLastRequest");
    const healthCacheHits = document.getElementById("healthCacheHits");
    const healthCacheMisses = document.getElementById("healthCacheMisses");
    const healthActionsList = document.getElementById("healthActionsList");
    const healthScreensList = document.getElementById("healthScreensList");
    const healthErrorBox = document.getElementById("healthErrorBox");

    const refreshRolloutAssistantButton =
      document.getElementById(
        "refreshRolloutAssistantButton"
      );

    const resetRolloutProgressButton =
      document.getElementById(
        "resetRolloutProgressButton"
      );

    const rolloutAssistantSummary =
      document.getElementById(
        "rolloutAssistantSummary"
      );

    const rolloutAssistantList =
      document.getElementById(
        "rolloutAssistantList"
      );

    const rolloutAssistantMessage =
      document.getElementById(
        "rolloutAssistantMessage"
      );

    const refreshPlayerVersionsButton =
      document.getElementById(
        "refreshPlayerVersionsButton"
      );

    const playerVersionSummary =
      document.getElementById(
        "playerVersionSummary"
      );

    const expectedPlayerVersionLabel =
      document.getElementById(
        "expectedPlayerVersionLabel"
      );

    const playerVersionList =
      document.getElementById(
        "playerVersionList"
      );

    const refreshGoLiveReadinessButton =
      document.getElementById(
        "refreshGoLiveReadinessButton"
      );

    const goLiveReadinessHeadline =
      document.getElementById(
        "goLiveReadinessHeadline"
      );

    const goLiveReadinessDescription =
      document.getElementById(
        "goLiveReadinessDescription"
      );

    const goLiveReadinessState =
      document.getElementById(
        "goLiveReadinessState"
      );

    const goLiveReadinessList =
      document.getElementById(
        "goLiveReadinessList"
      );

    const healthScoreNumber =
      document.getElementById(
        "healthScoreNumber"
      );

    const healthScoreReasons =
      document.getElementById(
        "healthScoreReasons"
      );

    const refreshPlayerHeartbeatsButton =
      document.getElementById(
        "refreshPlayerHeartbeatsButton"
      );

    const playerHeartbeatSummary =
      document.getElementById(
        "playerHeartbeatSummary"
      );

    const playerHeartbeatGrid =
      document.getElementById(
        "playerHeartbeatGrid"
      );

    const playerHeartbeatMeta =
      document.getElementById(
        "playerHeartbeatMeta"
      );

    const testHealthConnectionButton =
      document.getElementById("testHealthConnectionButton");

    const clearHealthLastErrorButton =
      document.getElementById("clearHealthLastErrorButton");

    const resetHealthTelemetryButton =
      document.getElementById("resetHealthTelemetryButton");

    const clearHealthCacheButton =
      document.getElementById("clearHealthCacheButton");

    const exportHealthTelemetryButton =
      document.getElementById("exportHealthTelemetryButton");

    const healthAdminMessage =
      document.getElementById("healthAdminMessage");

    const healthAdminForm =
      document.getElementById("healthAdminForm");

    const healthAdminPinField =
      document.getElementById("healthAdminPinField");

    const healthAdminOperationField =
      document.getElementById("healthAdminOperationField");

    const healthAdminRequestIdField =
      document.getElementById("healthAdminRequestIdField");

    const runAutomaticHealthChecksButton =
      document.getElementById(
        "runAutomaticHealthChecksButton"
      );

    const automaticHealthChecksStatus =
      document.getElementById(
        "automaticHealthChecksStatus"
      );

    const automaticHealthChecksList =
      document.getElementById(
        "automaticHealthChecksList"
      );

    const dailyCalendarHoverPreview =
      document.getElementById(
        "dailyCalendarHoverPreview"
      );

    const dailyCalendarHoverPreviewImage =
      document.getElementById(
        "dailyCalendarHoverPreviewImage"
      );

    const dailyCalendarHoverPreviewName =
      document.getElementById(
        "dailyCalendarHoverPreviewName"
      );

    const createHolidayForDateButton =
      document.getElementById(
        "createHolidayForDateButton"
      );

    const editHolidayForDateButton =
      document.getElementById(
        "editHolidayForDateButton"
      );

    const scheduleDraftRecoveryBanner =
      document.getElementById(
        "scheduleDraftRecoveryBanner"
      );

    const scheduleDraftRecoveryText =
      document.getElementById(
        "scheduleDraftRecoveryText"
      );

    const restoreScheduleDraftButton =
      document.getElementById(
        "restoreScheduleDraftButton"
      );

    const discardStoredScheduleDraftButton =
      document.getElementById(
        "discardStoredScheduleDraftButton"
      );

    const holidayGitHubScanButton =
      document.getElementById(
        "holidayGitHubScanButton"
      );

    const holidayGitHubScanStatus =
      document.getElementById(
        "holidayGitHubScanStatus"
      );

    const holidayOpenImageLibraryButton =
      document.getElementById(
        "holidayOpenImageLibraryButton"
      );

    const holidayDraftRecoveryBanner =
      document.getElementById(
        "holidayDraftRecoveryBanner"
      );

    const holidayDraftRecoveryText =
      document.getElementById(
        "holidayDraftRecoveryText"
      );

    const restoreHolidayDraftButton =
      document.getElementById(
        "restoreHolidayDraftButton"
      );

    const discardStoredHolidayDraftButton =
      document.getElementById(
        "discardStoredHolidayDraftButton"
      );

    const restorePreviewTitle =
      document.getElementById(
        "restorePreviewTitle"
      );

    const restoreDestination =
      document.getElementById(
        "restoreDestination"
      );

    const restoreCurrentRows =
      document.getElementById(
        "restoreCurrentRows"
      );

    const restoreBackupRows =
      document.getElementById(
        "restoreBackupRows"
      );

    const restoreDifferenceCount =
      document.getElementById(
        "restoreDifferenceCount"
      );

    const restoreCurrentData =
      document.getElementById(
        "restoreCurrentData"
      );

    const restoreBackupData =
      document.getElementById(
        "restoreBackupData"
      );

    const restoreChangeList =
      document.getElementById(
        "restoreChangeList"
      );

    const restoreBackupButton =
      document.getElementById(
        "restoreBackupButton"
      );

    const restoreSaveMessage =
      document.getElementById(
        "restoreSaveMessage"
      );

    const restoreBackupForm =
      document.getElementById(
        "restoreBackupForm"
      );

    const restorePinField =
      document.getElementById(
        "restorePinField"
      );

    const restoreTypeField =
      document.getElementById(
        "restoreTypeField"
      );

    const restoreScreenField =
      document.getElementById(
        "restoreScreenField"
      );

    const restoreDataField =
      document.getElementById(
        "restoreDataField"
      );

    const restoreRequestIdField =
      document.getElementById(
        "restoreRequestIdField"
      );

    const managerScreenSelect =
      document.getElementById(
        "managerScreenSelect"
      );

    const reloadManagerButton =
      document.getElementById(
        "reloadManagerButton"
      );

    const managerOpenScreen =
      document.getElementById(
        "managerOpenScreen"
      );

    const managerSource =
      document.getElementById(
        "managerSource"
      );

    const managerEntryCount =
      document.getElementById(
        "managerEntryCount"
      );

    const managerCurrentImage =
      document.getElementById(
        "managerCurrentImage"
      );

    const managerNextChange =
      document.getElementById(
        "managerNextChange"
      );

    const managerScheduleBody =
      document.getElementById(
        "managerScheduleBody"
      );

    const simulatorTimeInput =
      document.getElementById(
        "simulatorTimeInput"
      );

    const simulateScheduleButton =
      document.getElementById(
        "simulateScheduleButton"
      );

    const simulateNowButton =
      document.getElementById(
        "simulateNowButton"
      );

    const simulatorSelectedImage =
      document.getElementById(
        "simulatorSelectedImage"
      );

    const simulatorStartTime =
      document.getElementById(
        "simulatorStartTime"
      );

    const simulatorEndTime =
      document.getElementById(
        "simulatorEndTime"
      );

    const simulatorSelectionType =
      document.getElementById(
        "simulatorSelectionType"
      );

    const simulatorDecision =
      document.getElementById(
        "simulatorDecision"
      );

    const scheduleTemplateNameInput =
      document.getElementById(
        "scheduleTemplateNameInput"
      );

    const saveScheduleTemplateButton =
      document.getElementById(
        "saveScheduleTemplateButton"
      );

    const scheduleTemplateList =
      document.getElementById(
        "scheduleTemplateList"
      );

    const scheduleTemplatePreview =
      document.getElementById(
        "scheduleTemplatePreview"
      );

    const scheduleTemplatePreviewTitle =
      document.getElementById(
        "scheduleTemplatePreviewTitle"
      );

    const scheduleTemplatePreviewJson =
      document.getElementById(
        "scheduleTemplatePreviewJson"
      );

    const closeScheduleTemplatePreviewButton =
      document.getElementById(
        "closeScheduleTemplatePreviewButton"
      );

    const managerGitHubScanButton =
      document.getElementById(
        "managerGitHubScanButton"
      );

    const managerGitHubScanStatus =
      document.getElementById(
        "managerGitHubScanStatus"
      );

    const openImageLibraryButton =
      document.getElementById(
        "openImageLibraryButton"
      );

    const runIntegrityCheckButton =
      document.getElementById(
        "runIntegrityCheckButton"
      );

    const integrityTemporaryCount =
      document.getElementById(
        "integrityTemporaryCount"
      );

    const integrityOverlapCount =
      document.getElementById(
        "integrityOverlapCount"
      );

    const integrityGapCount =
      document.getElementById(
        "integrityGapCount"
      );

    const integrityPersistentStatus =
      document.getElementById(
        "integrityPersistentStatus"
      );

    const integrityList =
      document.getElementById(
        "integrityList"
      );

    const managerModeStatus =
      document.getElementById(
        "managerModeStatus"
      );

    const managerEditButton =
      document.getElementById(
        "managerEditButton"
      );

    const managerAddRowButton =
      document.getElementById(
        "managerAddRowButton"
      );

    const managerDiscardButton =
      document.getElementById(
        "managerDiscardButton"
      );

    const managerDirtyIndicator =
      document.getElementById(
        "managerDirtyIndicator"
      );

    const managerValidation =
      document.getElementById(
        "managerValidation"
      );

    const managerSaveButton =
      document.getElementById(
        "managerSaveButton"
      );

    const managerSaveMessage =
      document.getElementById(
        "managerSaveMessage"
      );

    const managerRepositoryWarning =
      document.getElementById(
        "managerRepositoryWarning"
      );

    const scheduleSaveForm =
      document.getElementById(
        "scheduleSaveForm"
      );

    const saveScreenField =
      document.getElementById(
        "saveScreenField"
      );

    const savePinField =
      document.getElementById(
        "savePinField"
      );

    const saveScheduleField =
      document.getElementById(
        "saveScheduleField"
      );

    const saveRequestIdField =
      document.getElementById(
        "saveRequestIdField"
      );

    const screenStates =
      new Map();

    let requestGeneration = 0;

    const managerDrafts =
      new Map();

    let managerEditingEnabled =
      false;

    let activeSaveRequestId =
      null;

    let managerSaveInProgress =
      false;

    let holidayOverrides =
      [];

    let holidayRequestGeneration =
      0;

    let holidayEditingEnabled =
      false;

    let holidayDraft =
      null;

    let holidaySaveInProgress =
      false;

    let activeHolidaySaveRequestId =
      null;

    let backupHistory =
      [];

    let backupRequestGeneration =
      0;

    let selectedBackup =
      null;

    let restorePreviewData =
      null;

    let restoreInProgress =
      false;

    let activeRestoreRequestId =
      null;

    let imageLibraryIndex =
      [];

    let repositoryImages =
      [];

    let missingReferencedImages =
      new Set();

    let unusedRepositoryImages =
      new Set();

    let imageHealthScanned =
      false;

    let activeImagePickerInput =
      null;

    let auditEntries =
      [];

    let auditRequestGeneration =
      0;

    let scheduleTemplates =
      [];

    const offlineScreens =
      new Set();

    const offlineSections =
      new Set();

    let dashboardOfflineSnapshot =
      readDashboardOfflineSnapshot();

    let automaticHealthCheckTimer =
      null;

    let automaticHealthCheckInProgress =
      false;

    let activeHealthAdminRequestId =
      null;

    let latestHealthTelemetry =
      null;

    let playerHeartbeatRefreshTimer =
      null;

    let latestPlayerHeartbeats =
      [];

    let latestHealthScoreResult =
      null;

    let rolloutProgress =
      readRolloutProgress();

    let calendarCursor =
      new Date();

    let selectedCalendarDate =
      null;

    let dailyCalendarResizeState =
      null;

    /*
     * =====================================================
     * BRAND
     * =====================================================
     */

    function applyDashboardBrand() {
      dashboardTitle.textContent =
        DASHBOARD_BRAND.title;

      dashboardSubtitle.textContent =
        DASHBOARD_BRAND.subtitle;

      dashboardLogo.src =
        DASHBOARD_BRAND.logoFile;

      document.documentElement.style.setProperty(
        "--blue",
        DASHBOARD_BRAND.primaryColor
      );

      document.documentElement.style.setProperty(
        "--regular",
        DASHBOARD_BRAND.secondaryColor
      );

      document.documentElement.style.setProperty(
        "--holiday",
        DASHBOARD_BRAND.holidayColor
      );

      document.documentElement.style.setProperty(
        "--error",
        DASHBOARD_BRAND.errorColor
      );

      document.title =
        `${DASHBOARD_BRAND.title} Control Center`;
    }

    /*
     * =====================================================
     * THEME
     * =====================================================
     */

    function getSavedThemePreference() {
      try {
        return localStorage.getItem(
          DASHBOARD_THEME.storageKey
        ) || "auto";
      } catch (error) {
        return "auto";
      }
    }

    function saveThemePreference(preference) {
      try {
        localStorage.setItem(
          DASHBOARD_THEME.storageKey,
          preference
        );
      } catch (error) {
        console.warn(
          "Theme preference could not be saved."
        );
      }
    }

    function getAutomaticTheme(date) {
      const hour =
        date.getHours();

      const isLightHours =
        hour >=
          DASHBOARD_THEME.lightModeStartsAt &&
        hour <
          DASHBOARD_THEME.darkModeStartsAt;

      return isLightHours
        ? "light"
        : "dark";
    }

    function applyTheme(theme) {
      document.documentElement.setAttribute(
        "data-theme",
        theme
      );
    }

    function updateThemeButton(preference) {
      if (preference === "light") {
        themeButtonIcon.textContent =
          "☀";

        themeButtonText.textContent =
          "Light mode";

        return;
      }

      if (preference === "dark") {
        themeButtonIcon.textContent =
          "☾";

        themeButtonText.textContent =
          "Dark mode";

        return;
      }

      themeButtonIcon.textContent =
        "◐";

      themeButtonText.textContent =
        "Auto theme";
    }

    function applyThemePreference() {
      const preference =
        getSavedThemePreference();

      const theme =
        preference === "auto"
          ? getAutomaticTheme(new Date())
          : preference;

      applyTheme(theme);
      updateThemeButton(preference);
    }

    function cycleThemePreference() {
      const current =
        getSavedThemePreference();

      let next =
        "auto";

      if (current === "auto") {
        next = "light";
      } else if (current === "light") {
        next = "dark";
      }

      saveThemePreference(next);
      applyThemePreference();
    }

    /*
     * =====================================================
     * CREATE SCREEN CARDS
     * =====================================================
     */

    function createScreenCards() {
      screenGrid.innerHTML = "";

      SCREEN_NAMES.forEach(screenName => {
        const safeId =
          createSafeId(screenName);

        const card =
          document.createElement("article");

        card.id =
          `card-${safeId}`;

        card.className =
          "screen-card";

        card.innerHTML = `
          <div class="card-header">
            <div>
              <h2 class="screen-name">
                ${escapeHtml(screenName)}
              </h2>

              <div
                id="state-${safeId}"
                class="screen-state"
              >
                Waiting for schedule…
              </div>
            </div>

            <span
              id="badge-${safeId}"
              class="status-badge status-loading"
            >
              Loading
            </span>
          </div>

          <div class="preview-container">
            <img
              id="preview-${safeId}"
              class="preview-image"
              alt="Current scheduled preview for ${escapeHtml(screenName)}"
            >

            <div
              id="preview-overlay-${safeId}"
              class="preview-overlay"
            >
              Loading preview…
            </div>
          </div>

          <div class="card-body">
            <div class="current-image-block">
              <div class="eyebrow">
                Current image
              </div>

              <div
                id="current-image-${safeId}"
                class="current-image-name"
              >
                Loading…
              </div>
            </div>

            <div class="information-grid">
              <div class="information-box">
                <div class="information-label">
                  Source
                </div>

                <div
                  id="source-${safeId}"
                  class="information-value"
                >
                  —
                </div>
              </div>

              <div class="information-box">
                <div class="information-label">
                  Current time
                </div>

                <div
                  id="current-time-${safeId}"
                  class="information-value"
                >
                  —
                </div>
              </div>

              <div class="information-box">
                <div class="information-label">
                  Next change
                </div>

                <div
                  id="next-change-${safeId}"
                  class="information-value"
                >
                  —
                </div>
              </div>

              <div class="information-box">
                <div class="information-label">
                  Countdown
                </div>

                <div
                  id="countdown-${safeId}"
                  class="information-value countdown"
                >
                  —
                </div>
              </div>
            </div>

            <div class="information-box">
              <div class="information-label">
                Next image
              </div>

              <div
                id="next-image-${safeId}"
                class="information-value"
              >
                —
              </div>
            </div>

            <div class="timeline-section">
              <div class="timeline-header">
                <div class="timeline-title">
                  Today's schedule
                </div>

                <div class="timeline-note">
                  White border = active · White line = current time
                </div>
              </div>

              <div class="timeline-scroll-area">
                <div
                  id="timeline-${safeId}"
                  class="timeline"
                ></div>

                <div class="timeline-labels">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>

            <div class="card-actions">
              <a
                class="button button-primary"
                href="${SIGNAGE_PAGE}?screen=${encodeURIComponent(screenName)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open full screen
              </a>

              <a
                class="button"
                href="${SIGNAGE_PAGE}?screen=${encodeURIComponent(screenName)}&debug=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Debug view
              </a>
            </div>
          </div>
        `;

        screenGrid.appendChild(card);
      });

      screenCountElement.textContent =
        String(SCREEN_NAMES.length);
    }

    /*
     * =====================================================
     * FETCH SCHEDULES
     * =====================================================
     */

    function refreshDashboard() {
      refreshButton.classList.add(
        "refreshing"
      );

      requestGeneration += 1;

      const currentGeneration =
        requestGeneration;

      lastRefreshElement.textContent =
        `Refreshing at ${formatLocalClock(new Date())}`;

      SCREEN_NAMES.forEach(
        (screenName, index) => {
          loadScreenSchedule(
            screenName,
            index,
            currentGeneration
          );
        }
      );
    }

    function loadScreenSchedule(
      screenName,
      index,
      generation
    ) {
      const callbackName =
        `dashboardV3Callback_${index}_${generation}`;

      const scriptId =
        `dashboard-feed-${index}`;

      const previousScript =
        document.getElementById(scriptId);

      if (previousScript) {
        previousScript.remove();
      }

      let callbackCompleted = false;

      window[callbackName] =
        function(payload) {
          callbackCompleted = true;

          try {
            processScreenPayload(
              screenName,
              payload
            );
          } finally {
            delete window[callbackName];

            const script =
              document.getElementById(scriptId);

            if (script) {
              script.remove();
            }
          }
        };

      const script =
        document.createElement("script");

      script.id = scriptId;
      script.async = true;

      const separator =
        SCHEDULE_FEED_URL.includes("?")
          ? "&"
          : "?";

      script.src =
        `${SCHEDULE_FEED_URL}` +
        `${separator}callback=${callbackName}` +
        `&screen=${encodeURIComponent(screenName)}` +
        `&_=${Date.now()}`;

      script.onerror =
        function() {
          callbackCompleted = true;

          delete window[callbackName];

          setScreenError(
            screenName,
            "Could not connect to Apps Script."
          );
        };

      document.head.appendChild(script);

      setTimeout(
        function() {
          if (
            !callbackCompleted &&
            window[callbackName]
          ) {
            delete window[callbackName];

            setScreenError(
              screenName,
              "Apps Script did not respond within 12 seconds."
            );
          }
        },
        12000
      );
    }

    function processScreenPayload(
      screenName,
      payload
    ) {
      if (!payload) {
        setScreenError(
          screenName,
          "No response received."
        );

        return;
      }

      if (payload.success !== true) {
        setScreenError(
          screenName,
          payload.error ||
          "Apps Script returned an error."
        );

        return;
      }

      if (!Array.isArray(payload.schedule)) {
        setScreenError(
          screenName,
          "Schedule data is invalid."
        );

        return;
      }

      const schedule =
        payload.schedule
          .filter(isValidScheduleItem)
          .map(item => ({
            time:
              String(item.time).trim(),

            endTime:
              normalizeOptionalDashboardTime(
                item.endTime
              ),

            image:
              String(item.image).trim(),

            fade:
              Number(item.fade) || 1500
          }))
          .sort((a, b) =>
            a.time.localeCompare(b.time)
          );

      if (schedule.length === 0) {
        setScreenError(
          screenName,
          "No valid schedule entries were found."
        );

        return;
      }

      const now =
        new Date();

      const activeItem =
        getActiveScheduleItem(
          schedule,
          getCurrentHHMM(now)
        );

      const nextItem =
        getNextScheduleItem(
          schedule,
          now
        );

      const state = {
        screenName,

        source:
          payload.scheduleSource === "holiday"
            ? "holiday"
            : "regular",

        activeDate:
          payload.activeDate || "",

        schedule,
        activeItem,
        nextItem,

        imageMissing: false,
        error: null
      };

      screenStates.set(
        screenName,
        state
      );

      offlineScreens.delete(
        screenName
      );

      saveScreenOfflineSnapshot(
        screenName,
        state
      );

      updateOfflineModeBanner();
      updateScreenCard(state);
      updateDashboardSummary();

      if (
        imageLibraryWorkspace.classList.contains(
          "active"
        )
      ) {
        rebuildImageLibrary();
      }

      /*
       * Keep the editor stable while typing. Incoming feed
       * refreshes update the background state but do not
       * rebuild the table until editing is finished.
       */
      if (
        scheduleManagerWorkspace.classList.contains(
          "active"
        ) &&
        managerScreenSelect.value === screenName &&
        !managerEditingEnabled &&
        !managerSaveInProgress
      ) {
        updateScheduleManager();
      }

      lastRefreshElement.textContent =
        `Last refreshed: ${formatLocalClock(new Date())}`;

      refreshButton.classList.remove(
        "refreshing"
      );
    }

    function isValidScheduleItem(item) {
      return (
        item &&
        /^\d{2}:\d{2}$/.test(
          String(item.time || "")
        ) &&
        String(item.image || "").trim() !== ""
      );
    }

    /*
     * =====================================================
     * SCHEDULE HELPERS
     * =====================================================
     */

    function getActiveScheduleItem(
      schedule,
      currentTime
    ) {
      let activeItem =
        null;

      for (const item of schedule) {
        if (item.time > currentTime) {
          break;
        }

        if (
          !item.endTime ||
          currentTime < item.endTime
        ) {
          activeItem =
            item;
        }
      }

      if (activeItem) {
        return activeItem;
      }

      /*
       * Match the player fallback:
       * return to the most recent untimed item that already
       * started.
       */
      for (
        let index =
          schedule.length - 1;
        index >= 0;
        index -= 1
      ) {
        const item =
          schedule[index];

        if (
          item.time <= currentTime &&
          !item.endTime
        ) {
          return item;
        }
      }

      /*
       * Before the first item, continue the final untimed
       * item from the previous day.
       */
      for (
        let index =
          schedule.length - 1;
        index >= 0;
        index -= 1
      ) {
        if (!schedule[index].endTime) {
          return schedule[index];
        }
      }

      return (
        schedule[schedule.length - 1] ||
        null
      );
    }

    function getNextScheduleItem(
      schedule,
      now
    ) {
      const currentTime =
        getCurrentHHMM(now);

      for (const item of schedule) {
        if (item.time > currentTime) {
          return {
            ...item,
            tomorrow: false,
            targetDate:
              createTargetDate(
                now,
                item.time,
                false
              )
          };
        }
      }

      const firstItem =
        schedule[0];

      return {
        ...firstItem,
        tomorrow: true,
        targetDate:
          createTargetDate(
            now,
            firstItem.time,
            true
          )
      };
    }

    function createTargetDate(
      now,
      time,
      tomorrow
    ) {
      const parts =
        time.split(":");

      const target =
        new Date(now);

      target.setHours(
        Number(parts[0]),
        Number(parts[1]),
        0,
        0
      );

      if (tomorrow) {
        target.setDate(
          target.getDate() + 1
        );
      }

      return target;
    }

    /*
     * =====================================================
     * SCREEN CARDS
     * =====================================================
     */

    function updateScreenCard(state) {
      const safeId =
        createSafeId(state.screenName);

      const card =
        document.getElementById(
          `card-${safeId}`
        );

      const badge =
        document.getElementById(
          `badge-${safeId}`
        );

      const screenState =
        document.getElementById(
          `state-${safeId}`
        );

      const currentImage =
        document.getElementById(
          `current-image-${safeId}`
        );

      const source =
        document.getElementById(
          `source-${safeId}`
        );

      const nextChange =
        document.getElementById(
          `next-change-${safeId}`
        );

      const nextImage =
        document.getElementById(
          `next-image-${safeId}`
        );

      const preview =
        document.getElementById(
          `preview-${safeId}`
        );

      const previewOverlay =
        document.getElementById(
          `preview-overlay-${safeId}`
        );

      const isHoliday =
        state.source === "holiday";

      card.className =
        state.offlineSnapshot
          ? "screen-card offline-card"
          : isHoliday
            ? "screen-card holiday-card"
            : "screen-card";

      badge.className =
        state.offlineSnapshot
          ? "status-badge status-offline"
          : isHoliday
            ? "status-badge status-holiday"
            : "status-badge status-regular";

      if (state.offlineSnapshot) {
        badge.innerHTML = `
          <span class="status-offline-main">
            Offline
          </span>

          <span class="status-offline-sub">
            Using cached data
          </span>
        `;

      } else {
        badge.textContent =
          isHoliday
            ? "Holiday"
            : "Regular";
      }

      screenState.textContent =
        state.offlineSnapshot
          ? `💾 Cached snapshot · ${formatOfflineSnapshotAge(state.snapshotSavedAt)}`
          : isHoliday
            ? "Holiday override currently active"
            : state.activeItem.endTime
              ? `Temporary item active until ${state.activeItem.endTime}`
              : "Regular schedule operating normally";

      currentImage.textContent =
        state.activeItem.image;

      source.textContent =
        state.offlineSnapshot
          ? (
              isHoliday
                ? "Cached Holiday Override"
                : "Cached Regular Schedule"
            )
          : isHoliday
            ? "Holiday Override"
            : "Regular Schedule";

      nextChange.textContent =
        state.nextItem.tomorrow
          ? `${state.nextItem.time} tomorrow`
          : state.nextItem.time;

      nextImage.textContent =
        state.nextItem.image;

      previewOverlay.className =
        "preview-overlay";

      previewOverlay.textContent =
        "Loading preview…";

      preview.onload =
        function() {
          state.imageMissing = false;

          previewOverlay.classList.add(
            "hidden"
          );

          updateDashboardSummary();
        };

      preview.onerror =
        function() {
          state.imageMissing = true;

          previewOverlay.className =
            "preview-overlay error";

          previewOverlay.textContent =
            `Missing image: ${state.activeItem.image}`;

          card.classList.add(
            "error-card"
          );

          updateDashboardSummary();
        };

      preview.src =
        `${buildImageUrl(state.activeItem.image)}` +
        `?dashboardV3=${Date.now()}`;

      renderTimeline(state);
      updateLiveScreenInformation(state);
    }

    /*
     * =====================================================
     * TIMELINE
     * =====================================================
     */

    function renderTimeline(state) {
      const safeId =
        createSafeId(state.screenName);

      const timeline =
        document.getElementById(
          `timeline-${safeId}`
        );

      timeline.innerHTML = "";

      const schedule =
        state.schedule;

      const currentTime =
        getCurrentHHMM(
          new Date()
        );

      const activeItem =
        getActiveScheduleItem(
          schedule,
          currentTime
        );

      schedule.forEach(
        (item, index) => {
          const startMinute =
            timeToMinutes(item.time);

          const nextItem =
            schedule[index + 1];

          const explicitEndMinute =
            item.endTime
              ? timeToMinutes(
                  item.endTime
                )
              : null;

          const endMinute =
            explicitEndMinute !== null
              ? explicitEndMinute
              : nextItem
                ? timeToMinutes(
                    nextItem.time
                  )
                : 1440;

          const left =
            (startMinute / 1440) * 100;

          const width =
            Math.max(
              (
                (endMinute - startMinute) /
                1440
              ) * 100,
              0.25
            );

          const segment =
            document.createElement("div");

          segment.className =
            `timeline-segment ${state.source}`;

          if (item.endTime) {
            segment.classList.add(
              "has-explicit-end"
            );
          }

          if (
            activeItem &&
            activeItem.time === item.time &&
            activeItem.image === item.image
          ) {
            segment.classList.add(
              "active"
            );
          }

          if (width < 9) {
            segment.classList.add(
              "narrow"
            );
          }

          if (width < 4) {
            segment.classList.add(
              "very-narrow"
            );
          }

          segment.style.left =
            `${left}%`;

          segment.style.width =
            `${width}%`;

          segment.title =
            `${item.time} — ${item.image}` +
            (
              item.endTime
                ? `\nEnds ${item.endTime}`
                : nextItem
                  ? `\nUntil ${nextItem.time}`
                  : "\nUntil midnight"
            );

          const thumbnail =
            document.createElement("img");

          thumbnail.className =
            "timeline-thumbnail";

          thumbnail.alt = "";
          thumbnail.loading = "lazy";

          thumbnail.src =
            buildImageUrl(item.image);

          const thumbnailFallback =
            document.createElement("div");

          thumbnailFallback.className =
            "timeline-thumbnail-fallback";

          thumbnailFallback.textContent =
            "Image unavailable";

          thumbnail.onerror =
            function() {
              thumbnail.style.display =
                "none";

              thumbnailFallback.classList.add(
                "visible"
              );
            };

          const content =
            document.createElement("div");

          content.className =
            "timeline-content";

          const timeLabel =
            document.createElement("div");

          timeLabel.className =
            "timeline-time";

          timeLabel.textContent =
            item.time;

          const imageLabel =
            document.createElement("div");

          imageLabel.className =
            "timeline-image-name";

          imageLabel.textContent =
            item.endTime
              ? `${item.image} · ends ${item.endTime}`
              : item.image;

          content.appendChild(
            timeLabel
          );

          content.appendChild(
            imageLabel
          );

          segment.appendChild(
            thumbnail
          );

          segment.appendChild(
            thumbnailFallback
          );

          segment.appendChild(
            content
          );

          timeline.appendChild(
            segment
          );
        }
      );

      const nowMarker =
        document.createElement("div");

      nowMarker.id =
        `timeline-now-${safeId}`;

      nowMarker.className =
        "timeline-now";

      timeline.appendChild(
        nowMarker
      );

      updateTimelineMarker(
        state.screenName
      );
    }

    function updateTimelineMarker(screenName) {
      const safeId =
        createSafeId(screenName);

      const marker =
        document.getElementById(
          `timeline-now-${safeId}`
        );

      if (!marker) {
        return;
      }

      const now =
        new Date();

      const minutes =
        now.getHours() * 60 +
        now.getMinutes() +
        now.getSeconds() / 60;

      marker.style.left =
        `${(minutes / 1440) * 100}%`;
    }

    function updateTimelineActiveSegment(
      state
    ) {
      const safeId =
        createSafeId(state.screenName);

      const timeline =
        document.getElementById(
          `timeline-${safeId}`
        );

      if (!timeline) {
        return;
      }

      const segments =
        timeline.querySelectorAll(
          ".timeline-segment"
        );

      const currentTime =
        getCurrentHHMM(
          new Date()
        );

      const activeItem =
        getActiveScheduleItem(
          state.schedule,
          currentTime
        );

      segments.forEach(
        (segment, index) => {
          const item =
            state.schedule[index];

          const isActive =
            activeItem &&
            item &&
            item.time === activeItem.time &&
            item.image === activeItem.image;

          segment.classList.toggle(
            "active",
            Boolean(isActive)
          );
        }
      );
    }

    /*
     * =====================================================
     * LIVE UPDATES
     * =====================================================
     */

    function updateLiveInformation() {
      screenStates.forEach(state => {
        if (state.error) {
          return;
        }

        const now =
          new Date();

        const currentTime =
          getCurrentHHMM(now);

        const newActiveItem =
          getActiveScheduleItem(
            state.schedule,
            currentTime
          );

        const activeImageChanged =
          newActiveItem.image !==
          state.activeItem.image;

        state.activeItem =
          newActiveItem;

        state.nextItem =
          getNextScheduleItem(
            state.schedule,
            now
          );

        if (activeImageChanged) {
          updateScreenCard(state);
        } else {
          updateLiveScreenInformation(state);

          updateTimelineMarker(
            state.screenName
          );

          updateTimelineActiveSegment(
            state
          );
        }
      });

      updateDashboardSummary();

      /*
       * Do not rebuild the editable table while the user is
       * typing. Re-rendering would replace the focused input
       * and make editing feel glitchy.
       */
      if (
        scheduleManagerWorkspace.classList.contains(
          "active"
        ) &&
        !managerEditingEnabled &&
        !managerSaveInProgress
      ) {
        updateScheduleManager();
      }
    }

    function updateLiveScreenInformation(state) {
      const safeId =
        createSafeId(state.screenName);

      const currentTimeElement =
        document.getElementById(
          `current-time-${safeId}`
        );

      const countdownElement =
        document.getElementById(
          `countdown-${safeId}`
        );

      const nextChangeElement =
        document.getElementById(
          `next-change-${safeId}`
        );

      const nextImageElement =
        document.getElementById(
          `next-image-${safeId}`
        );

      currentTimeElement.textContent =
        formatLocalClock(new Date());

      countdownElement.textContent =
        formatDuration(
          state.nextItem.targetDate -
          new Date()
        );

      nextChangeElement.textContent =
        state.nextItem.tomorrow
          ? `${state.nextItem.time} tomorrow`
          : state.nextItem.time;

      nextImageElement.textContent =
        state.nextItem.image;
    }

    /*
     * =====================================================
     * ERRORS
     * =====================================================
     */

    function setScreenError(
      screenName,
      message
    ) {
      if (
        restoreScreenFromOfflineSnapshot(
          screenName,
          message
        )
      ) {
        return;
      }

      offlineScreens.add(
        screenName
      );

      updateOfflineModeBanner();

      const safeId =
        createSafeId(screenName);

      const card =
        document.getElementById(
          `card-${safeId}`
        );

      const badge =
        document.getElementById(
          `badge-${safeId}`
        );

      const screenState =
        document.getElementById(
          `state-${safeId}`
        );

      const currentImage =
        document.getElementById(
          `current-image-${safeId}`
        );

      const source =
        document.getElementById(
          `source-${safeId}`
        );

      const previewOverlay =
        document.getElementById(
          `preview-overlay-${safeId}`
        );

      screenStates.set(
        screenName,
        {
          screenName,
          error: message,
          imageMissing: false
        }
      );

      card.className =
        "screen-card error-card";

      badge.className =
        "status-badge status-error";

      badge.textContent =
        "Error";

      screenState.textContent =
        message;

      currentImage.textContent =
        message;

      source.textContent =
        "Unavailable";

      previewOverlay.className =
        "preview-overlay error";

      previewOverlay.textContent =
        message;

      refreshButton.classList.remove(
        "refreshing"
      );

      updateDashboardSummary();
    }

    /*
     * =====================================================
     * SUMMARY
     * =====================================================
     */

    function updateDashboardSummary() {
      let loaded = 0;
      let regular = 0;
      let holiday = 0;
      let errors = 0;

      const upcoming = [];

      screenStates.forEach(state => {
        if (
          state.error ||
          state.imageMissing
        ) {
          errors += 1;
        }

        if (!state.error) {
          loaded += 1;

          if (state.source === "holiday") {
            holiday += 1;
          } else {
            regular += 1;
          }

          upcoming.push({
            screenName:
              state.screenName,

            image:
              state.nextItem.image,

            time:
              state.nextItem.time,

            targetDate:
              state.nextItem.targetDate,

            tomorrow:
              state.nextItem.tomorrow
          });
        }
      });

      loadedCountElement.textContent =
        String(loaded);

      regularCountElement.textContent =
        String(regular);

      holidayCountElement.textContent =
        String(holiday);

      errorCountElement.textContent =
        String(errors);

      updateHealthBanner(
        loaded,
        errors,
        holiday
      );

      updateUpcomingChanges(
        upcoming
      );
    }

    function updateHealthBanner(
      loaded,
      errors,
      holiday
    ) {
      healthDot.className =
        "health-dot";

      if (errors > 0) {
        healthDot.classList.add(
          "error"
        );

        healthTitle.textContent =
          "System requires attention";

        healthDescription.textContent =
          `${errors} warning or error` +
          `${errors === 1 ? "" : "s"} detected.`;

        return;
      }

      if (loaded < SCREEN_NAMES.length) {
        healthDot.classList.add(
          "warning"
        );

        healthTitle.textContent =
          "Schedules still loading";

        healthDescription.textContent =
          `${loaded} of ${SCREEN_NAMES.length} screens loaded.`;

        return;
      }

      healthTitle.textContent =
        "System healthy";

      healthDescription.textContent =
        holiday > 0
          ? `${holiday} holiday override` +
            `${holiday === 1 ? "" : "s"} active.`
          : "All screens are using regular schedules.";
    }

    function updateUpcomingChanges(upcoming) {
      upcoming.sort(
        (a, b) =>
          a.targetDate - b.targetDate
      );

      if (upcoming.length === 0) {
        upcomingList.innerHTML =
          `<div class="muted">
             No upcoming schedule changes available.
           </div>`;

        globalNextChange.textContent =
          "—";

        return;
      }

      const first =
        upcoming[0];

      globalNextChange.textContent =
        `${first.screenName} · ` +
        `${first.time} · ` +
        `${formatDuration(
          first.targetDate - new Date()
        )}`;

      upcomingList.innerHTML =
        upcoming
          .map(item => `
            <div class="upcoming-item">
              <div class="upcoming-time">
                ${escapeHtml(item.time)}
              </div>

              <div class="upcoming-screen">
                ${escapeHtml(item.screenName)}
              </div>

              <div class="upcoming-image">
                ${escapeHtml(item.image)}
                ${item.tomorrow ? " · tomorrow" : ""}
              </div>

              <div class="upcoming-countdown">
                ${escapeHtml(
                  formatDuration(
                    item.targetDate - new Date()
                  )
                )}
              </div>
            </div>
          `)
          .join("");
    }

    /*
     * =====================================================
     * TODAY'S OPERATIONS
     * =====================================================
     */

    function updateOperationsPanel() {
      const now =
        new Date();

      updateOperationsGreeting(now);

      operationsClock.textContent =
        formatLocalClock(now);

      operationsDate.textContent =
        now.toLocaleDateString(
          [],
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }
        );

      let loadedScreens = 0;
      let holidayScreens = 0;
      let totalChanges = 0;

      const allChanges = [];
      const upcomingChanges = [];

      screenStates.forEach(state => {
        if (
          state.error ||
          !Array.isArray(state.schedule)
        ) {
          return;
        }

        loadedScreens += 1;

        if (state.source === "holiday") {
          holidayScreens += 1;
        }

        state.schedule.forEach(item => {
          const targetDate =
            createTargetDate(
              now,
              item.time,
              false
            );

          const change = {
            screenName:
              state.screenName,

            time:
              item.time,

            image:
              item.image,

            targetDate
          };

          allChanges.push(change);
          totalChanges += 1;

          if (targetDate > now) {
            upcomingChanges.push(change);
          }
        });
      });

      allChanges.sort(
        (a, b) =>
          a.targetDate - b.targetDate
      );

      upcomingChanges.sort(
        (a, b) =>
          a.targetDate - b.targetDate
      );

      operationsScreens.textContent =
        `${loadedScreens} / ${SCREEN_NAMES.length}`;

      operationsChanges.textContent =
        String(totalChanges);

      updateOperationsHoliday(
        holidayScreens
      );

      updateFirstAndLastChanges(
        allChanges
      );

      updateNextOperationChange(
        upcomingChanges,
        now
      );
    }

    function updateOperationsGreeting(now) {
      const hour =
        now.getHours();

      let greeting =
        "Good evening";

      if (hour < 12) {
        greeting =
          "Good morning";
      } else if (hour < 18) {
        greeting =
          "Good afternoon";
      }

      operationsGreeting.textContent =
        `${greeting} 👋`;
    }

    function updateOperationsHoliday(
      holidayScreens
    ) {
      operationsHoliday.classList.remove(
        "holiday-active"
      );

      if (holidayScreens === 0) {
        operationsHoliday.textContent =
          "None";

        operationsHolidayDetail.textContent =
          "Regular schedules active";

        return;
      }

      operationsHoliday.textContent =
        `${holidayScreens} active`;

      operationsHolidayDetail.textContent =
        holidayScreens === 1
          ? "One screen uses an override"
          : `${holidayScreens} screens use overrides`;

      operationsHoliday.classList.add(
        "holiday-active"
      );
    }

    function updateFirstAndLastChanges(
      allChanges
    ) {
      if (allChanges.length === 0) {
        operationsFirst.textContent =
          "—";

        operationsFirstDetail.textContent =
          "No schedule loaded";

        operationsLast.textContent =
          "—";

        operationsLastDetail.textContent =
          "No schedule loaded";

        return;
      }

      const first =
        allChanges[0];

      const last =
        allChanges[
          allChanges.length - 1
        ];

      operationsFirst.textContent =
        first.time;

      operationsFirstDetail.textContent =
        `${first.screenName} · ${first.image}`;

      operationsLast.textContent =
        last.time;

      operationsLastDetail.textContent =
        `${last.screenName} · ${last.image}`;
    }

    function updateNextOperationChange(
      upcomingChanges,
      now
    ) {
      if (upcomingChanges.length === 0) {
        const tomorrowChanges = [];

        screenStates.forEach(state => {
          if (
            state.error ||
            !Array.isArray(state.schedule)
          ) {
            return;
          }

          state.schedule.forEach(item => {
            tomorrowChanges.push({
              screenName:
                state.screenName,

              time:
                item.time,

              image:
                item.image,

              targetDate:
                createTargetDate(
                  now,
                  item.time,
                  true
                )
            });
          });
        });

        tomorrowChanges.sort(
          (a, b) =>
            a.targetDate - b.targetDate
        );

        if (tomorrowChanges.length === 0) {
          operationsNext.textContent =
            "—";

          operationsNextDetail.textContent =
            "No upcoming changes";

          return;
        }

        const next =
          tomorrowChanges[0];

        operationsNext.textContent =
          `${next.time} tomorrow`;

        operationsNextDetail.textContent =
          `${next.screenName} · ` +
          `${formatDuration(
            next.targetDate - now
          )}`;

        return;
      }

      const next =
        upcomingChanges[0];

      operationsNext.textContent =
        next.time;

      operationsNextDetail.textContent =
        `${next.screenName} · ` +
        `${formatDuration(
          next.targetDate - now
        )}`;
    }

    /*
     * =====================================================
     * V3 WORKSPACES
     * =====================================================
     */

    function openWorkspace(workspaceName) {
      const showHome =
        workspaceName === "home";

      const showControl =
        workspaceName === "control";

      if (showHome) {
        renderMissionControlStatuses();
      }

      const showManager =
        workspaceName === "manager";

      const showHoliday =
        workspaceName === "holiday";

      const showBackups =
        workspaceName === "backups";

      const showImages =
        workspaceName === "images";

      const showAudit =
        workspaceName === "audit";

      const showCalendar =
        workspaceName === "calendar";

      const showCompatibility =
        workspaceName === "compatibility";

      const showDailyCalendar =
        workspaceName === "dailyCalendar";

      const showSystemHealth =
        workspaceName === "systemHealth";

      homeTab.classList.toggle(
        "active",
        showHome
      );

      controlCenterTab.classList.toggle(
        "active",
        showControl
      );

      scheduleManagerTab.classList.toggle(
        "active",
        showManager
      );

      holidayManagerTab.classList.toggle(
        "active",
        showHoliday
      );

      backupHistoryTab.classList.toggle(
        "active",
        showBackups
      );

      imageLibraryTab.classList.toggle(
        "active",
        showImages
      );

      auditLogTab.classList.toggle(
        "active",
        showAudit
      );

      holidayCalendarTab.classList.toggle(
        "active",
        showCalendar
      );

      compatibilityAuditTab.classList.toggle(
        "active",
        showCompatibility
      );

      dailyScheduleCalendarTab.classList.toggle(
        "active",
        showDailyCalendar
      );

      systemHealthTab.classList.toggle(
        "active",
        showSystemHealth
      );

      homeWorkspace.classList.toggle(
        "active",
        showHome
      );

      controlCenterWorkspace.classList.toggle(
        "active",
        showControl
      );

      scheduleManagerWorkspace.classList.toggle(
        "active",
        showManager
      );

      holidayManagerWorkspace.classList.toggle(
        "active",
        showHoliday
      );

      backupHistoryWorkspace.classList.toggle(
        "active",
        showBackups
      );

      imageLibraryWorkspace.classList.toggle(
        "active",
        showImages
      );

      auditLogWorkspace.classList.toggle(
        "active",
        showAudit
      );

      holidayCalendarWorkspace.classList.toggle(
        "active",
        showCalendar
      );

      compatibilityAuditWorkspace.classList.toggle(
        "active",
        showCompatibility
      );

      dailyScheduleCalendarWorkspace.classList.toggle(
        "active",
        showDailyCalendar
      );

      systemHealthWorkspace.classList.toggle(
        "active",
        showSystemHealth
      );

      if (showManager) {
        updateScheduleManager();
      }

      if (showHoliday) {
        if (holidayOverrides.length === 0) {
          loadHolidayOverrides();
        } else {
          renderHolidayOverrides();
        }
      }

      if (showBackups) {
        if (backupHistory.length === 0) {
          loadBackupHistory();
        } else {
          renderBackupHistory();
        }
      }

      if (showImages) {
        rebuildImageLibrary();
      }

      if (showAudit) {
        if (auditEntries.length === 0) {
          loadAuditLog();
        } else {
          renderAuditLog();
        }
      }

      if (showCalendar) {
        if (holidayOverrides.length === 0) {
          loadHolidayOverrides();
        }

        renderHolidayCalendar();
      }

      if (showCompatibility) {
        runCompatibilityAudit();
      }

      if (showDailyCalendar) {
        renderDailyScheduleCalendar();
      }

      if (showSystemHealth) {
        loadSystemHealth();
        loadPlayerHeartbeats();
        runAutomaticHealthChecks();
        runGoLiveReadinessCheck();
        renderRolloutAssistant();
        startAutomaticHealthChecks();
        startPlayerHeartbeatAutoRefresh();
      } else {
        stopAutomaticHealthChecks();
        stopPlayerHeartbeatAutoRefresh();
      }
    }


    function setupScheduleManager() {
      managerScreenSelect.innerHTML =
        SCREEN_NAMES
          .map(screenName => `
            <option value="${escapeHtml(screenName)}">
              ${escapeHtml(screenName)}
            </option>
          `)
          .join("");

      managerScreenSelect.addEventListener(
        "change",
        function() {
          managerEditingEnabled = false;
          hideManagerSaveMessage();
          updateManagerEditingControls();
          updateScheduleDraftRecoveryBanner();
          resetScheduleSimulation();
          resetScheduleIntegrityChecks();
          updateScheduleManager();
        }
      );

      managerEditButton.addEventListener(
        "click",
        function() {
          managerEditingEnabled =
            !managerEditingEnabled;

          if (managerEditingEnabled) {
            ensureManagerDraft(
              managerScreenSelect.value
            );
          }

          updateManagerEditingControls();
          updateScheduleManager();
        }
      );

      managerAddRowButton.addEventListener(
        "click",
        addManagerDraftRow
      );

      managerDiscardButton.addEventListener(
        "click",
        discardManagerDraft
      );

      managerSaveButton.addEventListener(
        "click",
        saveManagerDraft
      );

      managerScheduleBody.addEventListener(
        "input",
        handleManagerTableInput
      );

      managerScheduleBody.addEventListener(
        "click",
        handleManagerTableClick
      );

      managerRepositoryWarning.addEventListener(
        "click",
        function(event) {
          const button =
            event.target.closest(
              "[data-fix-repository-name]"
            );

          if (!button) {
            return;
          }

          applyRepositoryNameFix(
            button.dataset.fixRepositoryKind,
            Number(
              button.dataset.fixRepositoryRow
            ),
            button.dataset.fixRepositoryName
          );
        }
      );

      simulatorTimeInput.addEventListener(
        "input",
        function() {
          simulatorTimeInput.value =
            formatManagerTimeInput(
              simulatorTimeInput.value
            );
        }
      );

      simulateScheduleButton.addEventListener(
        "click",
        runScheduleSimulation
      );

      simulateNowButton.addEventListener(
        "click",
        function() {
          simulatorTimeInput.value =
            getCurrentHHMM(
              new Date()
            );

          runScheduleSimulation();
        }
      );

      runIntegrityCheckButton.addEventListener(
        "click",
        runScheduleIntegrityChecks
      );

      managerGitHubScanButton.addEventListener(
        "click",
        scanGitHubImagesFromScheduleManager
      );

      saveScheduleTemplateButton.addEventListener(
        "click",
        saveCurrentScheduleAsTemplate
      );

      scheduleTemplateList.addEventListener(
        "click",
        handleScheduleTemplateAction
      );

      closeScheduleTemplatePreviewButton.addEventListener(
        "click",
        closeScheduleTemplatePreview
      );

      openImageLibraryButton.addEventListener(
        "click",
        function() {
          openWorkspace(
            "images"
          );
        }
      );

      restoreScheduleDraftButton.addEventListener(
        "click",
        restoreStoredScheduleDraft
      );

      discardStoredScheduleDraftButton.addEventListener(
        "click",
        discardStoredScheduleDraft
      );

      managerOpenScreen.href =
        `${SIGNAGE_PAGE}?screen=` +
        encodeURIComponent(
          managerScreenSelect.value
        );

      updateManagerEditingControls();
    }


    function updateManagerEditingControls() {
      const screenName =
        managerScreenSelect.value;

      const hasDraft =
        managerDrafts.has(screenName);

      managerEditButton.textContent =
        managerEditingEnabled
          ? "✓ Finish editing"
          : "✎ Enable editing";

      managerAddRowButton.disabled =
        !managerEditingEnabled;

      managerDiscardButton.disabled =
        !hasDraft;

      const draft =
        managerDrafts.get(screenName);

      const validation =
        draft
          ? validateManagerDraft(draft)
          : { valid: false };

      managerSaveButton.disabled =
        isDashboardOfflineMode() ||
        !hasDraft ||
        !validation.valid ||
        managerSaveInProgress;

      managerSaveButton.textContent =
        managerSaveInProgress
          ? "Saving…"
          : "Save to Google Sheets";

      managerModeStatus.className =
        managerEditingEnabled
          ? "manager-status editing"
          : hasDraft
            ? "manager-status changed"
            : "manager-status";

      managerModeStatus.textContent =
        managerEditingEnabled
          ? "Local editing"
          : hasDraft
            ? "Local changes"
            : "Read-only";

      managerDirtyIndicator.classList.toggle(
        "visible",
        hasDraft
      );
    }


    function ensureManagerDraft(screenName) {
      if (managerDrafts.has(screenName)) {
        return managerDrafts.get(screenName);
      }

      const state =
        screenStates.get(screenName);

      if (
        !state ||
        state.error ||
        !Array.isArray(state.schedule)
      ) {
        return null;
      }

      const draft =
        state.schedule.map(item => ({
          time:
            item.time,

          endTime:
            item.endTime || "",

          image:
            item.image,

          fade:
            item.fade
        }));

      managerDrafts.set(
        screenName,
        draft
      );

      return draft;
    }


    function addManagerDraftRow() {
      const screenName =
        managerScreenSelect.value;

      const draft =
        ensureManagerDraft(screenName);

      if (!draft) {
        return;
      }

      hideManagerSaveMessage();

      draft.push({
        time: "12:00",
        endTime: "",
        image: "",
        fade: 1500
      });

      draft.sort((a, b) =>
        a.time.localeCompare(b.time)
      );

      persistScheduleDraft(
        screenName,
        draft
      );

      updateManagerEditingControls();
      updateScheduleManager();
    }


    function discardManagerDraft() {
      const screenName =
        managerScreenSelect.value;

      managerDrafts.delete(screenName);
      removeStoredScheduleDraft(
        screenName
      );

      managerEditingEnabled = false;
      hideManagerSaveMessage();

      updateManagerEditingControls();
      updateScheduleManager();
    }


    function handleManagerTableInput(event) {
      const input =
        event.target.closest(
          "[data-manager-field]"
        );

      if (
        !input ||
        !managerEditingEnabled
      ) {
        return;
      }

      const screenName =
        managerScreenSelect.value;

      const draft =
        ensureManagerDraft(screenName);

      if (!draft) {
        return;
      }

      const rowIndex =
        Number(input.dataset.rowIndex);

      const field =
        input.dataset.managerField;

      if (
        !Number.isInteger(rowIndex) ||
        !draft[rowIndex]
      ) {
        return;
      }

      if (field === "fade") {
        draft[rowIndex][field] =
          input.value === ""
            ? ""
            : Number(input.value);

      } else if (
        field === "time" ||
        field === "endTime"
      ) {
        const formattedTime =
          formatManagerTimeInput(
            input.value
          );

        input.value =
          formattedTime;

        draft[rowIndex][field] =
          formattedTime;

      } else {
        draft[rowIndex][field] =
          input.value;
      }

      hideManagerSaveMessage();

      persistScheduleDraft(
        screenName,
        draft
      );

      validateAndDisplayManagerDraft(
        draft
      );

      updateManagerEditingControls();
      updateVisibleImagePickerStatuses();
    }


    function handleManagerTableClick(event) {
      const pickerButton =
        event.target.closest(
          "[data-open-image-picker='regular']"
        );

      if (pickerButton) {
        const rowIndex =
          Number(
            pickerButton.dataset.rowIndex
          );

        const input =
          managerScheduleBody.querySelector(
            `[data-image-picker-input="regular"][data-row-index="${rowIndex}"]`
          );

        openGitHubImagePicker(
          input
        );

        return;
      }

      const deleteButton =
        event.target.closest(
          "[data-delete-manager-row]"
        );

      if (
        !deleteButton ||
        !managerEditingEnabled
      ) {
        return;
      }

      const screenName =
        managerScreenSelect.value;

      const draft =
        ensureManagerDraft(screenName);

      if (!draft) {
        return;
      }

      const rowIndex =
        Number(
          deleteButton.dataset.deleteManagerRow
        );

      if (
        !Number.isInteger(rowIndex) ||
        !draft[rowIndex]
      ) {
        return;
      }

      draft.splice(rowIndex, 1);

      persistScheduleDraft(
        screenName,
        draft
      );

      hideManagerSaveMessage();
      updateManagerEditingControls();
      updateScheduleManager();
    }

    /*
     * =====================================================
     * SAVE SCHEDULE TO GOOGLE SHEETS
     * =====================================================
     */

    function saveManagerDraft() {
      const screenName =
        managerScreenSelect.value;

      const draft =
        managerDrafts.get(screenName);

      if (!draft) {
        showManagerSaveMessage(
          "There are no local changes to save.",
          "error"
        );

        return;
      }

      const validation =
        validateManagerDraft(draft);

      displayManagerValidation(
        validation
      );

      if (!validation.valid) {
        showManagerSaveMessage(
          "Fix the validation errors before saving.",
          "error"
        );

        return;
      }

      const repositoryValidation =
        validateRepositoryFilenames(
          draft
        );

      renderRepositoryWarning(
        managerRepositoryWarning,
        repositoryValidation,
        "regular"
      );

      if (
        repositoryValidation.scanned &&
        !repositoryValidation.valid
      ) {
        showManagerSaveMessage(
          "Fix the GitHub filename errors before saving.",
          "error"
        );

        return;
      }

      const pin =
        window.prompt(
          `Enter the dashboard save PIN for "${screenName}":`
        );

      if (pin === null) {
        return;
      }

      if (!String(pin).trim()) {
        showManagerSaveMessage(
          "A save PIN is required.",
          "error"
        );

        return;
      }

      const confirmed =
        window.confirm(
          `Save ${draft.length} schedule row(s) to the "${screenName}" Google Sheet tab?\n\n` +
          `The current schedule will be backed up automatically before it is replaced.`
        );

      if (!confirmed) {
        return;
      }

      activeSaveRequestId =
        createSaveRequestId();

      managerSaveInProgress =
        true;

      updateManagerEditingControls();

      showManagerSaveMessage(
        `Saving "${screenName}"…`,
        "success"
      );

      scheduleSaveForm.action =
        SCHEDULE_FEED_URL;

      saveScreenField.value =
        screenName;

      savePinField.value =
        String(pin);

      saveScheduleField.value =
        JSON.stringify(
          draft
            .map(item => ({
              time:
                String(item.time).trim(),

              endTime:
                String(
                  item.endTime || ""
                ).trim(),

              image:
                String(item.image).trim(),

              fade:
                Number(item.fade)
            }))
            .sort((a, b) =>
              a.time.localeCompare(b.time)
            )
        );

      saveRequestIdField.value =
        activeSaveRequestId;

      scheduleSaveForm.submit();

      /*
       * Clear the visible PIN immediately after submitting.
       */
      savePinField.value =
        "";
    }


    function createSaveRequestId() {
      return (
        "save-" +
        Date.now() +
        "-" +
        Math.random()
          .toString(36)
          .slice(2, 10)
      );
    }


    function handleScheduleSaveMessage(event) {
      const data =
        event.data;

      if (
        !data ||
        data.type !==
          "miniGolfScheduleSaveResult" ||
        data.requestId !==
          activeSaveRequestId
      ) {
        return;
      }

      managerSaveInProgress =
        false;

      activeSaveRequestId =
        null;

      if (data.success !== true) {
        showManagerSaveMessage(
          data.error ||
          "Google Sheets did not accept the schedule.",
          "error"
        );

        updateManagerEditingControls();
        return;
      }

      const screenName =
        data.screen;

      managerDrafts.delete(
        screenName
      );

      managerRepositoryWarning.className =
        "repository-save-warning";

      managerRepositoryWarning.innerHTML =
        "";

      removeStoredScheduleDraft(
        screenName
      );

      managerEditingEnabled =
        false;

      showManagerSaveMessage(
        `Saved ${data.rowsWritten} row(s) to "${screenName}". A backup was created.`,
        "success"
      );

      if (
        auditLogWorkspace.classList.contains(
          "active"
        )
      ) {
        loadAuditLog();
      }

      updateManagerEditingControls();

      /*
       * Reload the feed so the dashboard reflects the
       * schedule that was actually written.
       */
      setTimeout(
        function() {
          refreshDashboard();
          updateScheduleManager();
        },
        600
      );
    }


    function showManagerSaveMessage(
      message,
      type
    ) {
      managerSaveMessage.textContent =
        message;

      managerSaveMessage.className =
        `manager-save-message visible ${type}`;
    }


    function hideManagerSaveMessage() {
      managerSaveMessage.textContent =
        "";

      managerSaveMessage.className =
        "manager-save-message";
    }

    /*
     * =====================================================
     * SCHEDULE INTEGRITY CHECKS
     * =====================================================
     */

    function runScheduleIntegrityChecks() {
      const screenName =
        managerScreenSelect.value;

      const state =
        screenStates.get(
          screenName
        );

      if (
        !state ||
        state.error ||
        !Array.isArray(
          state.schedule
        )
      ) {
        resetScheduleIntegrityChecks();

        integrityList.innerHTML = `
          <div class="integrity-item integrity-item-warning">
            The selected schedule has not loaded.
          </div>
        `;

        return;
      }

      const schedule =
        (
          managerDrafts.get(
            screenName
          ) ||
          state.schedule
        )
          .map(item => ({
            ...item,

            time:
              String(item.time || ""),

            endTime:
              String(
                item.endTime || ""
              )
          }))
          .sort((a, b) =>
            a.time.localeCompare(
              b.time
            )
          );

      const persistentRows =
        schedule.filter(
          item =>
            !item.endTime
        );

      const temporaryRows =
        schedule.filter(
          item =>
            Boolean(item.endTime)
        );

      const overlaps =
        findScheduleOverlaps(
          schedule
        );

      const gaps =
        findFallbackGaps(
          schedule
        );

      integrityTemporaryCount.textContent =
        String(
          temporaryRows.length
        );

      integrityOverlapCount.textContent =
        String(
          overlaps.length
        );

      integrityGapCount.textContent =
        String(
          gaps.length
        );

      integrityPersistentStatus.textContent =
        persistentRows.length > 0
          ? "Yes"
          : "No";

      const messages = [];

      if (persistentRows.length === 0) {
        messages.push(`
          <div class="integrity-item integrity-item-warning">
            <strong>No fallback row with a blank End Time</strong>
            Every row has an End Time. Add at least one normal row with a blank End Time so the player always has a predictable image to display after temporary rows expire.
          </div>
        `);
      }

      overlaps.forEach(overlap => {
        messages.push(`
          <div class="integrity-item integrity-item-overlap">
            <strong>
              Overlap:
              ${escapeHtml(overlap.first.time)}
              →
              ${escapeHtml(overlap.first.endTime)}
              and
              ${escapeHtml(overlap.second.time)}
              →
              ${escapeHtml(overlap.second.endTime || "persistent")}
            </strong>

            From ${escapeHtml(overlap.second.time)}, the newer row
            <strong style="display:inline;">
              ${escapeHtml(overlap.second.image)}
            </strong>
            wins until it expires or another newer row starts.
          </div>
        `);
      });

      gaps.forEach(gap => {
        messages.push(`
          <div class="integrity-item integrity-item-gap">
            <strong>
              Fallback period:
              ${escapeHtml(gap.start)}
              →
              ${escapeHtml(gap.end)}
            </strong>

            No temporary item is active during this period.
            The player displays
            <strong style="display:inline;">
              ${escapeHtml(gap.fallbackImage)}
            </strong>
            as the most recent persistent fallback.
          </div>
        `);
      });

      if (
        messages.length === 0
      ) {
        messages.push(`
          <div class="integrity-item integrity-item-ok">
            <strong>Schedule looks healthy</strong>
            No temporary overlaps or fallback gaps were detected, and a permanent fallback row is available.
          </div>
        `);
      }

      integrityList.innerHTML =
        messages.join("");
    }


    function findScheduleOverlaps(
      schedule
    ) {
      const overlaps = [];

      for (
        let firstIndex = 0;
        firstIndex <
          schedule.length;
        firstIndex += 1
      ) {
        const first =
          schedule[firstIndex];

        const firstEnd =
          first.endTime ||
          "24:00";

        for (
          let secondIndex =
            firstIndex + 1;
          secondIndex <
            schedule.length;
          secondIndex += 1
        ) {
          const second =
            schedule[secondIndex];

          if (
            second.time >= firstEnd
          ) {
            break;
          }

          /*
           * Persistent rows naturally overlap all later rows.
           * Report only overlaps involving at least one
           * temporary row, because those are the cases that
           * usually need operator attention.
           */
          if (
            first.endTime ||
            second.endTime
          ) {
            overlaps.push({
              first:
                first,

              second:
                second
            });
          }
        }
      }

      return overlaps;
    }


    function findFallbackGaps(
      schedule
    ) {
      const temporaryRows =
        schedule
          .filter(
            item =>
              item.endTime
          )
          .sort((a, b) =>
            a.time.localeCompare(
              b.time
            )
          );

      const gaps = [];

      temporaryRows.forEach(
        (item, index) => {
          const nextTemporary =
            temporaryRows[
              index + 1
            ];

          const gapStart =
            item.endTime;

          const gapEnd =
            nextTemporary
              ? nextTemporary.time
              : "24:00";

          if (
            !gapStart ||
            gapStart >= gapEnd
          ) {
            return;
          }

          const fallback =
            findPersistentFallbackAtTime(
              schedule,
              gapStart
            );

          if (!fallback) {
            return;
          }

          gaps.push({
            start:
              gapStart,

            end:
              gapEnd,

            fallbackImage:
              fallback.image
          });
        }
      );

      return gaps;
    }


    function findPersistentFallbackAtTime(
      schedule,
      testTime
    ) {
      for (
        let index =
          schedule.length - 1;
        index >= 0;
        index -= 1
      ) {
        const item =
          schedule[index];

        if (
          item.time <= testTime &&
          !item.endTime
        ) {
          return item;
        }
      }

      for (
        let index =
          schedule.length - 1;
        index >= 0;
        index -= 1
      ) {
        if (!schedule[index].endTime) {
          return schedule[index];
        }
      }

      return null;
    }


    function resetScheduleIntegrityChecks() {
      integrityTemporaryCount.textContent =
        "0";

      integrityOverlapCount.textContent =
        "0";

      integrityGapCount.textContent =
        "0";

      integrityPersistentStatus.textContent =
        "—";

      integrityList.innerHTML = `
        <div class="integrity-item">
          Select a screen and run the checks.
        </div>
      `;
    }


    /*
     * =====================================================
     * SCHEDULE SIMULATOR
     * =====================================================
     */

    function runScheduleSimulation() {
      const screenName =
        managerScreenSelect.value;

      const state =
        screenStates.get(
          screenName
        );

      const testTime =
        String(
          simulatorTimeInput.value || ""
        ).trim();

      if (
        !/^([01]\d|2[0-3]):[0-5]\d$/
          .test(testTime)
      ) {
        simulatorSelectedImage.textContent =
          "—";

        simulatorStartTime.textContent =
          "—";

        simulatorEndTime.textContent =
          "—";

        simulatorSelectionType.innerHTML =
          `<span class="simulator-status simulator-status-none">
             Invalid time
           </span>`;

        simulatorDecision.textContent =
          "Enter a valid time in HH:MM format.";

        return;
      }

      if (
        !state ||
        state.error ||
        !Array.isArray(
          state.schedule
        )
      ) {
        simulatorSelectedImage.textContent =
          "—";

        simulatorStartTime.textContent =
          "—";

        simulatorEndTime.textContent =
          "—";

        simulatorSelectionType.innerHTML =
          `<span class="simulator-status simulator-status-none">
             No schedule
           </span>`;

        simulatorDecision.textContent =
          "The selected screen schedule has not loaded.";

        return;
      }

      const schedule =
        managerDrafts.get(
          screenName
        ) ||
        state.schedule;

      const result =
        simulateScheduleSelection(
          schedule,
          testTime
        );

      if (!result.item) {
        simulatorSelectedImage.textContent =
          "—";

        simulatorStartTime.textContent =
          "—";

        simulatorEndTime.textContent =
          "—";

        simulatorSelectionType.innerHTML =
          `<span class="simulator-status simulator-status-none">
             No result
           </span>`;

        simulatorDecision.textContent =
          result.reason;

        return;
      }

      simulatorSelectedImage.textContent =
        result.item.image;

      simulatorStartTime.textContent =
        result.item.time;

      simulatorEndTime.textContent =
        result.item.endTime || "—";

      simulatorSelectionType.innerHTML =
        `<span class="simulator-status simulator-status-${result.type}">
           ${escapeHtml(
             capitalizeDashboardText(
               result.type
             )
           )}
         </span>`;

      simulatorDecision.textContent =
        result.reason;
    }


    function simulateScheduleSelection(
      schedule,
      testTime
    ) {
      let activeItem =
        null;

      for (const item of schedule) {
        if (item.time > testTime) {
          break;
        }

        if (
          !item.endTime ||
          testTime < item.endTime
        ) {
          activeItem =
            item;
        }
      }

      if (activeItem) {
        return {
          item:
            activeItem,

          type:
            activeItem.endTime
              ? "temporary"
              : "persistent",

          reason:
            activeItem.endTime
              ? `${activeItem.image} started at ${activeItem.time} and remains eligible until ${activeItem.endTime}.`
              : `${activeItem.image} is the newest persistent item that has started by ${testTime}.`
        };
      }

      for (
        let index =
          schedule.length - 1;
        index >= 0;
        index -= 1
      ) {
        const item =
          schedule[index];

        if (
          item.time <= testTime &&
          !item.endTime
        ) {
          return {
            item:
              item,

            type:
              "fallback",

            reason:
              `No temporary item is active at ${testTime}, so the player falls back to the most recent persistent item: ${item.image}.`
          };
        }
      }

      for (
        let index =
          schedule.length - 1;
        index >= 0;
        index -= 1
      ) {
        const item =
          schedule[index];

        if (!item.endTime) {
          return {
            item:
              item,

            type:
              "fallback",

            reason:
              `The test time is before the first eligible item, so the player continues the final persistent image from the previous day: ${item.image}.`
          };
        }
      }

      if (schedule.length > 0) {
        const item =
          schedule[
            schedule.length - 1
          ];

        return {
          item:
            item,

          type:
            "fallback",

          reason:
            `Every row is temporary and none is active at ${testTime}. The player keeps a visible image to avoid a black screen; on first startup it uses ${item.image}.`
        };
      }

      return {
        item:
          null,

        type:
          "none",

        reason:
          "The schedule contains no rows."
      };
    }


    function resetScheduleSimulation() {
      simulatorTimeInput.value =
        "";

      simulatorSelectedImage.textContent =
        "—";

      simulatorStartTime.textContent =
        "—";

      simulatorEndTime.textContent =
        "—";

      simulatorSelectionType.textContent =
        "—";

      simulatorDecision.textContent =
        "Choose a time and run the simulation.";
    }

    /*
     * =====================================================
     * READ-ONLY SCHEDULE MANAGER
     * =====================================================
     */

    function updateScheduleManager() {
      renderScheduleTemplates();

      if (
        repositoryImages.length > 0
      ) {
        managerGitHubScanStatus.className =
          "manager-github-scan-text success";

        managerGitHubScanStatus.textContent =
          `${repositoryImages.length} GitHub image(s) currently loaded.`;
      }

      const screenName =
        managerScreenSelect.value;

      const state =
        screenStates.get(screenName);

      managerOpenScreen.href =
        `${SIGNAGE_PAGE}?screen=` +
        encodeURIComponent(screenName);

      updateManagerEditingControls();

      if (!state) {
        managerSource.textContent =
          "Loading";

        managerEntryCount.textContent =
          "0";

        managerCurrentImage.textContent =
          "Waiting for schedule…";

        managerNextChange.textContent =
          "—";

        managerScheduleBody.innerHTML = `
          <tr>
            <td
              colspan="7"
              class="manager-empty"
            >
              The selected schedule is still loading.
            </td>
          </tr>
        `;

        hideManagerValidation();
        return;
      }

      if (state.error) {
        managerSource.textContent =
          "Error";

        managerEntryCount.textContent =
          "0";

        managerCurrentImage.textContent =
          state.error;

        managerNextChange.textContent =
          "—";

        managerScheduleBody.innerHTML = `
          <tr>
            <td
              colspan="7"
              class="manager-empty"
            >
              ${escapeHtml(state.error)}
            </td>
          </tr>
        `;

        hideManagerValidation();
        return;
      }

      const now =
        new Date();

      const currentTime =
        getCurrentHHMM(now);

      const activeItem =
        getActiveScheduleItem(
          state.schedule,
          currentTime
        );

      const nextItem =
        getNextScheduleItem(
          state.schedule,
          now
        );

      const displayedSchedule =
        managerDrafts.get(screenName) ||
        state.schedule;

      managerSource.textContent =
        state.source === "holiday"
          ? "Holiday Override"
          : "Regular Schedule";

      managerEntryCount.textContent =
        String(displayedSchedule.length);

      managerCurrentImage.textContent =
        activeItem
          ? activeItem.image
          : "—";

      managerNextChange.textContent =
        nextItem.tomorrow
          ? `${nextItem.time} tomorrow`
          : nextItem.time;

      const validation =
        validateManagerDraft(
          displayedSchedule
        );

      displayManagerValidation(
        validation
      );

      managerScheduleBody.innerHTML =
        displayedSchedule
          .map((item, index) => {
            const status =
              getManagerRowStatus(
                item,
                activeItem,
                currentTime
              );

            const rowErrors =
              validation.rowErrors[index] ||
              {};

            if (managerEditingEnabled) {
              return `
                <tr>
                  <td>
                    ${index + 1}
                  </td>

                  <td>
                    <input
                      class="manager-input manager-time-input ${rowErrors.time ? "invalid" : ""}"
                      type="text"
                      inputmode="numeric"
                      maxlength="5"
                      placeholder="HH:MM"
                      value="${escapeHtml(item.time)}"
                      data-row-index="${index}"
                      data-manager-field="time"
                    >
                  </td>

                  <td>
                    <input
                      class="manager-input manager-end-time-input ${rowErrors.endTime ? "invalid" : ""}"
                      type="text"
                      inputmode="numeric"
                      maxlength="5"
                      placeholder="Optional"
                      value="${escapeHtml(item.endTime || "")}"
                      data-row-index="${index}"
                      data-manager-field="endTime"
                    >
                  </td>

                  <td>
                    <div class="image-picker-field">
                      <div class="image-picker-row">
                        <input
                          class="manager-input manager-image-input ${rowErrors.image ? "invalid" : ""}"
                          type="text"
                          value="${escapeHtml(item.image)}"
                          placeholder="image-name.jpg"
                          data-row-index="${index}"
                          data-manager-field="image"
                          data-image-picker-input="regular"
                        >

                        <button
                          class="button image-picker-button"
                          type="button"
                          data-open-image-picker="regular"
                          data-row-index="${index}"
                        >
                          Browse
                        </button>
                      </div>

                      <div
                        class="image-picker-status"
                        data-image-picker-status="regular"
                        data-row-index="${index}"
                      ></div>
                    </div>
                  </td>

                  <td>
                    <input
                      class="manager-input manager-fade-input ${rowErrors.fade ? "invalid" : ""}"
                      type="number"
                      min="0"
                      max="10000"
                      step="100"
                      value="${escapeHtml(item.fade)}"
                      data-row-index="${index}"
                      data-manager-field="fade"
                    >
                  </td>

                  <td>
                    <span
                      class="manager-row-status ${status.className}"
                    >
                      ${status.label}
                    </span>
                  </td>

                  <td>
                    ${
                      item.image
                        ? `
                          <img
                            class="manager-preview"
                            src="${buildImageUrl(item.image)}"
                            alt=""
                            onerror="
                              this.style.display='none';
                              this.nextElementSibling.style.display='block';
                            "
                          >

                          <div
                            class="manager-preview-error"
                            style="display:none"
                          >
                            Image unavailable
                          </div>
                        `
                        : `
                          <div class="manager-preview-error">
                            Enter an image filename
                          </div>
                        `
                    }
                  </td>

                  <td>
                    <div class="manager-row-actions">
                      <button
                        class="manager-icon-button danger"
                        type="button"
                        data-delete-manager-row="${index}"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }

            return `
              <tr>
                <td>
                  ${index + 1}
                </td>

                <td class="manager-time">
                  ${escapeHtml(item.time)}
                </td>

                <td class="manager-time">
                  ${escapeHtml(item.endTime || "—")}
                </td>

                <td class="manager-image-name">
                  ${escapeHtml(item.image)}
                </td>

                <td class="manager-fade">
                  ${escapeHtml(item.fade)} ms
                </td>

                <td>
                  <span
                    class="manager-row-status ${status.className}"
                  >
                    ${status.label}
                  </span>
                </td>

                <td>
                  <img
                    class="manager-preview"
                    src="${buildImageUrl(item.image)}"
                    alt=""
                    onerror="
                      this.style.display='none';
                      this.nextElementSibling.style.display='block';
                    "
                  >

                  <div
                    class="manager-preview-error"
                    style="display:none"
                  >
                    Image unavailable
                  </div>
                </td>

                <td>
                  —
                </td>
              </tr>
            `;
          })
          .join("");

      updateVisibleImagePickerStatuses();

      const repositoryValidation =
        validateRepositoryFilenames(
          schedule
        );

      renderRepositoryWarning(
        managerRepositoryWarning,
        repositoryValidation,
        "regular"
      );

      runScheduleIntegrityChecks();
    }


    function validateAndDisplayManagerDraft(
      draft
    ) {
      const validation =
        validateManagerDraft(draft);

      displayManagerValidation(
        validation
      );

      managerScheduleBody
        .querySelectorAll(
          "[data-manager-field]"
        )
        .forEach(input => {
          const rowIndex =
            Number(input.dataset.rowIndex);

          const field =
            input.dataset.managerField;

          const rowErrors =
            validation.rowErrors[rowIndex] ||
            {};

          input.classList.toggle(
            "invalid",
            Boolean(rowErrors[field])
          );
        });
    }


    function validateManagerDraft(schedule) {
      const errors = [];
      const rowErrors = {};
      const timeCounts = new Map();

      schedule.forEach((item, index) => {
        const rowNumber =
          index + 1;

        const time =
          String(item.time || "").trim();

        const endTime =
          String(item.endTime || "").trim();

        const image =
          String(item.image || "").trim();

        const fade =
          Number(item.fade);

        if (!/^\d{2}:\d{2}$/.test(time)) {
          errors.push(
            `Row ${rowNumber}: enter a valid start time.`
          );

          rowErrors[index] = {
            ...(rowErrors[index] || {}),
            time: true
          };
        } else {
          timeCounts.set(
            time,
            (timeCounts.get(time) || 0) + 1
          );
        }

        if (
          endTime &&
          !/^([01]\d|2[0-3]):[0-5]\d$/
            .test(endTime)
        ) {
          errors.push(
            `Row ${rowNumber}: enter a valid optional End Time.`
          );

          rowErrors[index] = {
            ...(rowErrors[index] || {}),
            endTime: true
          };
        }

        if (
          endTime &&
          /^([01]\d|2[0-3]):[0-5]\d$/
            .test(endTime) &&
          /^([01]\d|2[0-3]):[0-5]\d$/
            .test(time) &&
          endTime <= time
        ) {
          errors.push(
            `Row ${rowNumber}: End Time must be later than Start Time.`
          );

          rowErrors[index] = {
            ...(rowErrors[index] || {}),
            endTime: true
          };
        }

        if (!image) {
          errors.push(
            `Row ${rowNumber}: image filename is required.`
          );

          rowErrors[index] = {
            ...(rowErrors[index] || {}),
            image: true
          };
        }

        if (
          !Number.isFinite(fade) ||
          fade < 0 ||
          fade > 10000
        ) {
          errors.push(
            `Row ${rowNumber}: fade must be between 0 and 10000 ms.`
          );

          rowErrors[index] = {
            ...(rowErrors[index] || {}),
            fade: true
          };
        }
      });

      timeCounts.forEach(
        (count, time) => {
          if (count <= 1) {
            return;
          }

          errors.push(
            `Duplicate start time: ${time}.`
          );

          schedule.forEach(
            (item, index) => {
              if (item.time === time) {
                rowErrors[index] = {
                  ...(rowErrors[index] || {}),
                  time: true
                };
              }
            }
          );
        }
      );

      if (schedule.length === 0) {
        errors.push(
          "The schedule must contain at least one row."
        );
      }

      return {
        valid: errors.length === 0,
        errors,
        rowErrors
      };
    }


    function displayManagerValidation(
      validation
    ) {
      if (validation.valid) {
        managerValidation.classList.remove(
          "visible"
        );

        managerValidation.textContent =
          "";

        return;
      }

      managerValidation.innerHTML =
        `<strong>Please fix the following:</strong><br>` +
        validation.errors
          .map(error =>
            `• ${escapeHtml(error)}`
          )
          .join("<br>");

      managerValidation.classList.add(
        "visible"
      );
    }


    function hideManagerValidation() {
      managerValidation.classList.remove(
        "visible"
      );

      managerValidation.textContent =
        "";
    }

    function getManagerRowStatus(
      item,
      activeItem,
      currentTime
    ) {
      const isCurrent =
        Boolean(activeItem) &&
        item.time === activeItem.time &&
        item.image === activeItem.image;

      if (isCurrent) {
        return {
          label: "Current",
          className:
            "manager-status-current"
        };
      }

      if (item.time > currentTime) {
        return {
          label: "Upcoming",
          className:
            "manager-status-upcoming"
        };
      }

      return {
        label: "Past",
        className:
          "manager-status-past"
      };
    }

    /*
     * =====================================================
     * HOLIDAY OVERRIDE MANAGER — READ ONLY
     * =====================================================
     */

    function setupHolidayManager() {
      holidayScreenFilter.innerHTML =
        `
          <option value="all">
            All screens
          </option>
          <option value="All">
            All (global override)
          </option>
        ` +
        SCREEN_NAMES
          .map(screenName => `
            <option value="${escapeHtml(screenName)}">
              ${escapeHtml(screenName)}
            </option>
          `)
          .join("");

      holidayScreenFilter.addEventListener(
        "change",
        renderHolidayOverrides
      );

      holidayStatusFilter.addEventListener(
        "change",
        renderHolidayOverrides
      );

      reloadHolidayButton.addEventListener(
        "click",
        function() {
          if (
            holidayDraft &&
            !window.confirm(
              "Discard local Holiday Override changes and reload from Google Sheets?"
            )
          ) {
            return;
          }

          holidayDraft = null;
          holidayEditingEnabled = false;
          hideHolidaySaveMessage();
          updateHolidayEditingControls();
          loadHolidayOverrides();
        }
      );

      holidayEditButton.addEventListener(
        "click",
        function() {
          holidayEditingEnabled =
            !holidayEditingEnabled;

          if (
            holidayEditingEnabled &&
            !holidayDraft
          ) {
            holidayDraft =
              cloneHolidayRows(
                holidayOverrides
              );
          }

          updateHolidayEditingControls();
          renderHolidayOverrides();
        }
      );

      holidayAddRowButton.addEventListener(
        "click",
        addHolidayDraftRow
      );

      holidayDiscardButton.addEventListener(
        "click",
        discardHolidayDraft
      );

      holidaySaveButton.addEventListener(
        "click",
        saveHolidayDraft
      );

      holidayTableBody.addEventListener(
        "input",
        handleHolidayTableInput
      );

      holidayTableBody.addEventListener(
        "click",
        handleHolidayTableClick
      );

      holidayGitHubScanButton.addEventListener(
        "click",
        scanGitHubImagesFromHolidayManager
      );

      holidayOpenImageLibraryButton.addEventListener(
        "click",
        function() {
          openWorkspace(
            "images"
          );
        }
      );

      holidayRepositoryWarning.addEventListener(
        "click",
        function(event) {
          const button =
            event.target.closest(
              "[data-fix-repository-name]"
            );

          if (!button) {
            return;
          }

          applyRepositoryNameFix(
            button.dataset.fixRepositoryKind,
            Number(
              button.dataset.fixRepositoryRow
            ),
            button.dataset.fixRepositoryName
          );
        }
      );

      restoreHolidayDraftButton.addEventListener(
        "click",
        restoreStoredHolidayDraft
      );

      discardStoredHolidayDraftButton.addEventListener(
        "click",
        discardStoredHolidayDraft
      );

      window.addEventListener(
        "message",
        handleHolidaySaveMessage
      );

      updateHolidayEditingControls();
    }


    function cloneHolidayRows(rows) {
      return rows.map(item => ({
        screen:
          item.screen,
        startDate:
          item.startDate || "",
        endDate:
          item.endDate || "",
        startTime:
          item.startTime || "",
        image:
          item.image || "",
        fade:
          Number(item.fade) || 1500
      }));
    }


    function updateHolidayEditingControls() {
      const hasDraft =
        Array.isArray(holidayDraft);

      const validation =
        hasDraft
          ? validateHolidayDraft(
              holidayDraft
            )
          : { valid: false };

      holidayEditButton.textContent =
        holidayEditingEnabled
          ? "✓ Finish editing"
          : "✎ Enable editing";

      holidayAddRowButton.disabled =
        !holidayEditingEnabled;

      holidayDiscardButton.disabled =
        !hasDraft;

      holidaySaveButton.disabled =
        isDashboardOfflineMode() ||
        !hasDraft ||
        !validation.valid ||
        holidaySaveInProgress;

      holidaySaveButton.textContent =
        holidaySaveInProgress
          ? "Saving…"
          : "Save Holiday Overrides";

      holidayModeStatus.className =
        holidayEditingEnabled
          ? "manager-status editing"
          : hasDraft
            ? "manager-status changed"
            : "manager-status";

      holidayModeStatus.textContent =
        holidayEditingEnabled
          ? "Local editing"
          : hasDraft
            ? "Local changes"
            : "Read-only";

      holidayDirtyIndicator.classList.toggle(
        "visible",
        hasDraft
      );
    }


    function addHolidayDraftRow() {
      if (!holidayDraft) {
        holidayDraft =
          cloneHolidayRows(
            holidayOverrides
          );
      }

      hideHolidaySaveMessage();

      holidayDraft.push({
        screen:
          SCREEN_NAMES[0] || "All",
        startDate:
          formatDateForInput(
            new Date()
          ),
        endDate:
          formatDateForInput(
            new Date()
          ),
        startTime:
          "12:00",
        image:
          "",
        fade:
          1500
      });

      persistHolidayDraft(
        holidayDraft
      );

      updateHolidayEditingControls();
      renderHolidayOverrides();
    }


    function discardHolidayDraft() {
      holidayDraft = null;
      holidayEditingEnabled = false;

      holidayRepositoryWarning.className =
        "repository-save-warning";

      holidayRepositoryWarning.innerHTML =
        "";

      removeStoredHolidayDraft();
      hideHolidaySaveMessage();
      hideHolidayValidation();
      updateHolidayEditingControls();
      renderHolidayOverrides();
    }


    function handleHolidayTableInput(event) {
      const input =
        event.target.closest(
          "[data-holiday-field]"
        );

      if (
        !input ||
        !holidayEditingEnabled ||
        !holidayDraft
      ) {
        return;
      }

      const rowIndex =
        Number(
          input.dataset.rowIndex
        );

      const field =
        input.dataset.holidayField;

      if (
        !Number.isInteger(rowIndex) ||
        !holidayDraft[rowIndex]
      ) {
        return;
      }

      if (field === "fade") {
        holidayDraft[rowIndex][field] =
          input.value === ""
            ? ""
            : Number(input.value);

      } else if (field === "startTime") {
        const formatted =
          formatManagerTimeInput(
            input.value
          );

        input.value =
          formatted;

        holidayDraft[rowIndex][field] =
          formatted;

      } else {
        holidayDraft[rowIndex][field] =
          input.value;
      }

      hideHolidaySaveMessage();

      persistHolidayDraft(
        holidayDraft
      );

      const validation =
        validateHolidayDraft(
          holidayDraft
        );

      displayHolidayValidation(
        validation
      );

      applyHolidayInputErrors(
        validation
      );

      updateHolidayEditingControls();
      updateVisibleImagePickerStatuses();
    }


    function handleHolidayTableClick(event) {
      const pickerButton =
        event.target.closest(
          "[data-open-image-picker='holiday']"
        );

      if (pickerButton) {
        const rowIndex =
          Number(
            pickerButton.dataset.rowIndex
          );

        const input =
          holidayTableBody.querySelector(
            `[data-image-picker-input="holiday"][data-row-index="${rowIndex}"]`
          );

        openGitHubImagePicker(
          input
        );

        return;
      }

      const deleteButton =
        event.target.closest(
          "[data-delete-holiday-row]"
        );

      if (
        !deleteButton ||
        !holidayEditingEnabled ||
        !holidayDraft
      ) {
        return;
      }

      const rowIndex =
        Number(
          deleteButton.dataset.deleteHolidayRow
        );

      if (
        !Number.isInteger(rowIndex) ||
        !holidayDraft[rowIndex]
      ) {
        return;
      }

      holidayDraft.splice(
        rowIndex,
        1
      );

      persistHolidayDraft(
        holidayDraft
      );

      hideHolidaySaveMessage();
      updateHolidayEditingControls();
      renderHolidayOverrides();
    }


    function loadHolidayOverrides() {
      holidayRequestGeneration += 1;

      const generation =
        holidayRequestGeneration;

      const callbackName =
        `holidayManagerCallback_${generation}`;

      const scriptId =
        "holiday-manager-feed";

      const previousScript =
        document.getElementById(
          scriptId
        );

      if (previousScript) {
        previousScript.remove();
      }

      holidayTableBody.innerHTML = `
        <tr>
          <td
            colspan="9"
            class="manager-empty"
          >
            Loading Holiday Overrides…
          </td>
        </tr>
      `;

      window[callbackName] =
        function(payload) {
          try {
            if (
              !payload ||
              payload.success !== true ||
              !Array.isArray(
                payload.overrides
              )
            ) {
              throw new Error(
                payload &&
                payload.error
                  ? payload.error
                  : "The Holiday Overrides feed is invalid."
              );
            }

            holidayOverrides =
              payload.overrides;

            offlineSections.delete(
              "holiday"
            );

            saveOfflineSnapshotSection(
              "holidayOverrides",
              holidayOverrides
            );

            updateOfflineModeBanner();

            if (!holidayDraft) {
              renderHolidayOverrides();
            }

            if (
              imageLibraryWorkspace.classList.contains(
                "active"
              )
            ) {
              rebuildImageLibrary();
            }

            if (
              holidayCalendarWorkspace.classList.contains(
                "active"
              )
            ) {
              renderHolidayCalendar();
            }

          } catch (error) {
            if (
              restoreHolidayOverridesFromSnapshot(
                error.message || error
              )
            ) {
              return;
            }

            holidayTableBody.innerHTML = `
              <tr>
                <td
                  colspan="9"
                  class="manager-empty"
                >
                  ${escapeHtml(
                    error.message || error
                  )}
                </td>
              </tr>
            `;
          } finally {
            delete window[callbackName];

            const script =
              document.getElementById(
                scriptId
              );

            if (script) {
              script.remove();
            }
          }
        };

      const script =
        document.createElement("script");

      script.id =
        scriptId;

      const separator =
        SCHEDULE_FEED_URL.includes("?")
          ? "&"
          : "?";

      script.src =
        `${SCHEDULE_FEED_URL}` +
        `${separator}action=holidayManager` +
        `&callback=${callbackName}` +
        `&_=${Date.now()}`;

      script.onerror =
        function() {
          delete window[callbackName];

          if (
            restoreHolidayOverridesFromSnapshot(
              "Could not load Holiday Overrides from Apps Script."
            )
          ) {
            return;
          }

          holidayTableBody.innerHTML = `
            <tr>
              <td
                colspan="9"
                class="manager-empty"
              >
                Could not load Holiday Overrides from Apps Script.
              </td>
            </tr>
          `;
        };

      document.head.appendChild(
        script
      );
    }


    function renderHolidayOverrides() {
      if (
        repositoryImages.length > 0
      ) {
        holidayGitHubScanStatus.className =
          "manager-github-scan-text success";

        holidayGitHubScanStatus.textContent =
          `${repositoryImages.length} GitHub image(s) currently loaded.`;
      }

      const sourceRows =
        holidayDraft ||
        holidayOverrides;

      const validation =
        validateHolidayDraft(
          sourceRows
        );

      displayHolidayValidation(
        validation
      );

      holidayTotalCount.textContent =
        String(
          sourceRows.filter(
            item =>
              !isHolidayRowCompletelyEmpty(
                item
              )
          ).length
        );

      holidayActiveCount.textContent =
        String(
          sourceRows.filter(
            item =>
              getHolidayRowStatus(item) ===
              "active"
          ).length
        );

      holidayUpcomingCount.textContent =
        String(
          sourceRows.filter(
            item =>
              getHolidayRowStatus(item) ===
              "upcoming"
          ).length
        );

      holidayInvalidCount.textContent =
        String(
          validation.invalidRowCount
        );

      updateHolidayEditingControls();

      if (holidayEditingEnabled) {
        holidayTableBody.innerHTML =
          sourceRows
            .map((item, index) =>
              createEditableHolidayRow(
                item,
                index,
                validation
              )
            )
            .join("");

        applyHolidayInputErrors(
          validation
        );

        updateVisibleImagePickerStatuses();

        const repositoryValidation =
          validateRepositoryFilenames(
            sourceRows
          );

        renderRepositoryWarning(
          holidayRepositoryWarning,
          repositoryValidation,
          "holiday"
        );

        return;
      }

      const screenFilter =
        holidayScreenFilter.value;

      const statusFilter =
        holidayStatusFilter.value;

      const filtered =
        sourceRows
          .map((item, index) => ({
            ...item,
            originalIndex:
              index,
            status:
              getHolidayRowStatus(item)
          }))
          .filter(item => {
            const screenMatches =
              screenFilter === "all" ||
              item.screen ===
                screenFilter;

            const statusMatches =
              statusFilter === "all" ||
              item.status ===
                statusFilter;

            return (
              screenMatches &&
              statusMatches
            );
          });

      if (filtered.length === 0) {
        holidayTableBody.innerHTML = `
          <tr>
            <td
              colspan="9"
              class="manager-empty"
            >
              No Holiday Override rows match these filters.
            </td>
          </tr>
        `;

        return;
      }

      holidayTableBody.innerHTML =
        filtered
          .map((item, index) =>
            createReadOnlyHolidayRow(
              item,
              index
            )
          )
          .join("");
    }


    function createEditableHolidayRow(
      item,
      index,
      validation
    ) {
      const rowErrors =
        validation.rowErrors[index] ||
        {};

      const status =
        getHolidayRowStatus(item);

      return `
        <tr>
          <td>
            ${index + 1}
          </td>

          <td>
            <select
              class="manager-input holiday-screen-input ${rowErrors.screen ? "invalid" : ""}"
              data-row-index="${index}"
              data-holiday-field="screen"
            >
              ${createHolidayScreenOptions(
                item.screen
              )}
            </select>
          </td>

          <td>
            <div style="display:grid; gap:7px;">
              <input
                class="manager-input holiday-date-input ${rowErrors.startDate ? "invalid" : ""}"
                type="date"
                value="${escapeHtml(item.startDate)}"
                data-row-index="${index}"
                data-holiday-field="startDate"
              >

              <input
                class="manager-input holiday-date-input ${rowErrors.endDate ? "invalid" : ""}"
                type="date"
                value="${escapeHtml(item.endDate)}"
                data-row-index="${index}"
                data-holiday-field="endDate"
              >
            </div>
          </td>

          <td>
            <input
              class="manager-input holiday-time-input ${rowErrors.startTime ? "invalid" : ""}"
              type="text"
              inputmode="numeric"
              maxlength="5"
              placeholder="HH:MM"
              value="${escapeHtml(item.startTime)}"
              data-row-index="${index}"
              data-holiday-field="startTime"
            >
          </td>

          <td>
            <div class="image-picker-field">
              <div class="image-picker-row">
                <input
                  class="manager-input holiday-image-input ${rowErrors.image ? "invalid" : ""}"
                  type="text"
                  value="${escapeHtml(item.image)}"
                  placeholder="image-name.jpg"
                  data-row-index="${index}"
                  data-holiday-field="image"
                  data-image-picker-input="holiday"
                >

                <button
                  class="button image-picker-button"
                  type="button"
                  data-open-image-picker="holiday"
                  data-row-index="${index}"
                >
                  Browse
                </button>
              </div>

              <div
                class="image-picker-status"
                data-image-picker-status="holiday"
                data-row-index="${index}"
              ></div>
            </div>
          </td>

          <td>
            <input
              class="manager-input holiday-fade-input ${rowErrors.fade ? "invalid" : ""}"
              type="number"
              min="0"
              max="10000"
              step="100"
              value="${escapeHtml(item.fade)}"
              data-row-index="${index}"
              data-holiday-field="fade"
            >
          </td>

          <td>
            <span
              class="holiday-status-badge holiday-status-${escapeHtml(status)}"
            >
              ${escapeHtml(
                capitalizeDashboardText(
                  status
                )
              )}
            </span>
          </td>

          <td>
            ${
              item.image
                ? `
                  <img
                    class="manager-preview"
                    src="${buildImageUrl(item.image)}"
                    alt=""
                    onerror="
                      this.style.display='none';
                      this.nextElementSibling.style.display='block';
                    "
                  >

                  <div
                    class="manager-preview-error"
                    style="display:none"
                  >
                    Image unavailable
                  </div>
                `
                : `
                  <div class="manager-preview-error">
                    Enter an image filename
                  </div>
                `
            }
          </td>

          <td>
            <button
              class="manager-icon-button danger"
              type="button"
              data-delete-holiday-row="${index}"
            >
              Delete
            </button>
          </td>
        </tr>
      `;
    }


    function createReadOnlyHolidayRow(
      item,
      index
    ) {
      const status =
        item.status ||
        getHolidayRowStatus(item);

      return `
        <tr>
          <td>
            ${item.rowNumber || index + 2}
          </td>

          <td>
            ${escapeHtml(item.screen)}
          </td>

          <td class="holiday-date-range">
            ${escapeHtml(item.startDate || "—")}
            →
            ${escapeHtml(item.endDate || "—")}
          </td>

          <td class="manager-time">
            ${escapeHtml(item.startTime || "—")}
          </td>

          <td class="holiday-image-name">
            ${escapeHtml(item.image || "—")}
          </td>

          <td class="manager-fade">
            ${escapeHtml(item.fade)} ms
          </td>

          <td>
            <span
              class="holiday-status-badge holiday-status-${escapeHtml(status)}"
            >
              ${escapeHtml(
                capitalizeDashboardText(
                  status
                )
              )}
            </span>
          </td>

          <td>
            ${
              item.image
                ? `
                  <img
                    class="manager-preview"
                    src="${buildImageUrl(item.image)}"
                    alt=""
                    onerror="
                      this.style.display='none';
                      this.nextElementSibling.style.display='block';
                    "
                  >

                  <div
                    class="manager-preview-error"
                    style="display:none"
                  >
                    Image unavailable
                  </div>
                `
                : "—"
            }
          </td>

          <td>
            —
          </td>
        </tr>
      `;
    }


    function createHolidayScreenOptions(
      selectedValue
    ) {
      const values = [
        "All",
        ...SCREEN_NAMES
      ];

      if (
        selectedValue &&
        !values.includes(
          selectedValue
        )
      ) {
        values.push(
          selectedValue
        );
      }

      return values
        .map(value => `
          <option
            value="${escapeHtml(value)}"
            ${
              value === selectedValue
                ? "selected"
                : ""
            }
          >
            ${escapeHtml(value)}
          </option>
        `)
        .join("");
    }


    function getHolidayRowStatus(item) {
      const validation =
        validateHolidayDraft([
          item
        ]);

      if (!validation.valid) {
        return "invalid";
      }

      const today =
        formatDateForInput(
          new Date()
        );

      const currentTime =
        getCurrentHHMM(
          new Date()
        );

      if (
        today < item.startDate ||
        (
          today === item.startDate &&
          currentTime <
            item.startTime
        )
      ) {
        return "upcoming";
      }

      if (
        today > item.endDate
      ) {
        return "expired";
      }

      return "active";
    }


    function isHolidayRowCompletelyEmpty(
      item
    ) {
      return (
        !String(item.screen || "").trim() &&
        !String(item.startDate || "").trim() &&
        !String(item.endDate || "").trim() &&
        !String(item.startTime || "").trim() &&
        !String(item.image || "").trim() &&
        (
          item.fade === "" ||
          item.fade === null ||
          item.fade === undefined
        )
      );
    }


    function removeCompletelyEmptyHolidayRows(
      rows
    ) {
      return rows.filter(
        item =>
          !isHolidayRowCompletelyEmpty(
            item
          )
      );
    }


    function validateHolidayDraft(rows) {
      const errors = [];
      const rowErrors = {};
      let invalidRowCount = 0;

      if (!Array.isArray(rows)) {
        return {
          valid: false,
          errors: [
            "Holiday Overrides data is invalid."
          ],
          rowErrors: {},
          invalidRowCount: 1
        };
      }

      const nonEmptyRows =
        rows.filter(
          item =>
            !isHolidayRowCompletelyEmpty(
              item
            )
        );

      if (nonEmptyRows.length === 0) {
        return {
          valid: true,
          errors: [],
          rowErrors: {},
          invalidRowCount: 0
        };
      }

      rows.forEach((item, index) => {
        if (
          isHolidayRowCompletelyEmpty(
            item
          )
        ) {
          return;
        }

        const rowNumber =
          index + 1;

        let rowInvalid =
          false;

        const addError =
          function(field, message) {
            errors.push(
              `Row ${rowNumber}: ${message}`
            );

            rowErrors[index] = {
              ...(rowErrors[index] || {}),
              [field]: true
            };

            rowInvalid = true;
          };

        const screen =
          String(item.screen || "")
            .trim();

        const startDate =
          String(item.startDate || "")
            .trim();

        const endDate =
          String(item.endDate || "")
            .trim();

        const startTime =
          String(item.startTime || "")
            .trim();

        const image =
          String(item.image || "")
            .trim();

        const fade =
          Number(item.fade);

        if (!screen) {
          addError(
            "screen",
            "screen is required."
          );
        }

        if (
          !/^\d{4}-\d{2}-\d{2}$/
            .test(startDate)
        ) {
          addError(
            "startDate",
            "enter a valid start date."
          );
        }

        if (
          !/^\d{4}-\d{2}-\d{2}$/
            .test(endDate)
        ) {
          addError(
            "endDate",
            "enter a valid end date."
          );
        }

        if (
          startDate &&
          endDate &&
          startDate > endDate
        ) {
          addError(
            "endDate",
            "end date cannot be before start date."
          );
        }

        if (
          !/^([01]\d|2[0-3]):[0-5]\d$/
            .test(startTime)
        ) {
          addError(
            "startTime",
            "enter a valid time in HH:MM format."
          );
        }

        if (!image) {
          addError(
            "image",
            "image filename is required."
          );
        }

        if (
          !Number.isFinite(fade) ||
          fade < 0 ||
          fade > 10000
        ) {
          addError(
            "fade",
            "fade must be between 0 and 10000 ms."
          );
        }

        if (rowInvalid) {
          invalidRowCount += 1;
        }
      });

      return {
        valid:
          errors.length === 0,
        errors,
        rowErrors,
        invalidRowCount
      };
    }


    function displayHolidayValidation(
      validation
    ) {
      if (validation.valid) {
        hideHolidayValidation();
        return;
      }

      holidayValidation.innerHTML =
        `<strong>Please fix the following:</strong><br>` +
        validation.errors
          .map(error =>
            `• ${escapeHtml(error)}`
          )
          .join("<br>");

      holidayValidation.classList.add(
        "visible"
      );
    }


    function hideHolidayValidation() {
      holidayValidation.textContent =
        "";

      holidayValidation.className =
        "holiday-validation";
    }


    function applyHolidayInputErrors(
      validation
    ) {
      holidayTableBody
        .querySelectorAll(
          "[data-holiday-field]"
        )
        .forEach(input => {
          const rowIndex =
            Number(
              input.dataset.rowIndex
            );

          const field =
            input.dataset.holidayField;

          const rowErrors =
            validation.rowErrors[rowIndex] ||
            {};

          input.classList.toggle(
            "invalid",
            Boolean(rowErrors[field])
          );
        });
    }


    function saveHolidayDraft() {
      if (!holidayDraft) {
        showHolidaySaveMessage(
          "There are no local Holiday Override changes to save.",
          "error"
        );
        return;
      }

      const cleanedDraft =
        removeCompletelyEmptyHolidayRows(
          holidayDraft
        );

      const validation =
        validateHolidayDraft(
          cleanedDraft
        );

      displayHolidayValidation(
        validation
      );

      if (!validation.valid) {
        showHolidaySaveMessage(
          "Fix the validation errors before saving.",
          "error"
        );
        return;
      }

      const repositoryValidation =
        validateRepositoryFilenames(
          cleanedDraft
        );

      renderRepositoryWarning(
        holidayRepositoryWarning,
        repositoryValidation,
        "holiday"
      );

      if (
        repositoryValidation.scanned &&
        !repositoryValidation.valid
      ) {
        showHolidaySaveMessage(
          "Fix the GitHub filename errors before saving.",
          "error"
        );

        return;
      }

      const pin =
        window.prompt(
          "Enter the dashboard save PIN for Holiday Overrides:"
        );

      if (pin === null) {
        return;
      }

      if (!String(pin).trim()) {
        showHolidaySaveMessage(
          "A save PIN is required.",
          "error"
        );
        return;
      }

      const confirmed =
        window.confirm(
          `Save ${cleanedDraft.length} Holiday Override row(s) to Google Sheets?\n\n` +
          `The current Holiday Overrides tab will be backed up automatically before it is replaced.`
        );

      if (!confirmed) {
        return;
      }

      activeHolidaySaveRequestId =
        createSaveRequestId();

      holidaySaveInProgress =
        true;

      updateHolidayEditingControls();

      showHolidaySaveMessage(
        "Saving Holiday Overrides…",
        "success"
      );

      holidaySaveForm.action =
        SCHEDULE_FEED_URL;

      holidaySavePinField.value =
        String(pin);

      holidaySaveDataField.value =
        JSON.stringify(
          cleanedDraft.map(item => ({
            screen:
              String(item.screen).trim(),
            startDate:
              String(item.startDate).trim(),
            endDate:
              String(item.endDate).trim(),
            startTime:
              String(item.startTime).trim(),
            image:
              String(item.image).trim(),
            fade:
              Number(item.fade)
          }))
        );

      holidaySaveRequestIdField.value =
        activeHolidaySaveRequestId;

      holidaySaveForm.submit();

      holidaySavePinField.value =
        "";
    }


    function handleHolidaySaveMessage(event) {
      const data =
        event.data;

      if (
        !data ||
        data.type !==
          "miniGolfHolidaySaveResult" ||
        data.requestId !==
          activeHolidaySaveRequestId
      ) {
        return;
      }

      holidaySaveInProgress =
        false;

      activeHolidaySaveRequestId =
        null;

      if (data.success !== true) {
        showHolidaySaveMessage(
          data.error ||
          "Google Sheets did not accept the Holiday Overrides.",
          "error"
        );

        updateHolidayEditingControls();
        return;
      }

      holidayDraft = null;
      holidayEditingEnabled = false;

      removeStoredHolidayDraft();

      showHolidaySaveMessage(
        `Saved ${data.rowsWritten} Holiday Override row(s). A backup was created.`,
        "success"
      );

      if (
        auditLogWorkspace.classList.contains(
          "active"
        )
      ) {
        loadAuditLog();
      }

      updateHolidayEditingControls();

      setTimeout(
        loadHolidayOverrides,
        600
      );
    }


    function showHolidaySaveMessage(
      message,
      type
    ) {
      holidaySaveMessage.textContent =
        message;

      holidaySaveMessage.className =
        `holiday-save-message visible ${type}`;
    }


    function hideHolidaySaveMessage() {
      holidaySaveMessage.textContent =
        "";

      holidaySaveMessage.className =
        "holiday-save-message";
    }


    function formatDateForInput(date) {
      return [
        date.getFullYear(),
        String(
          date.getMonth() + 1
        ).padStart(2, "0"),
        String(
          date.getDate()
        ).padStart(2, "0")
      ].join("-");
    }


    function capitalizeDashboardText(value) {
      const text =
        String(value || "");

      if (!text) {
        return "";
      }

      return (
        text.charAt(0).toUpperCase() +
        text.slice(1)
      );
    }

    /*
     * =====================================================
     * BACKUP HISTORY — READ ONLY
     * =====================================================
     */

    function setupBackupHistory() {
      backupScreenFilter.innerHTML =
        `
          <option value="all">
            All screens
          </option>
          <option value="Holiday Overrides">
            Holiday Overrides
          </option>
        ` +
        SCREEN_NAMES
          .map(screenName => `
            <option value="${escapeHtml(screenName)}">
              ${escapeHtml(screenName)}
            </option>
          `)
          .join("");

      backupTypeFilter.addEventListener(
        "change",
        renderBackupHistory
      );

      backupScreenFilter.addEventListener(
        "change",
        renderBackupHistory
      );

      reloadBackupsButton.addEventListener(
        "click",
        loadBackupHistory
      );

      backupTableBody.addEventListener(
        "click",
        handleBackupTableClick
      );

      closeBackupDetailsButton.addEventListener(
        "click",
        closeBackupDetails
      );

      prepareRestoreButton.addEventListener(
        "click",
        prepareRestorePreview
      );

      closeRestorePreviewButton.addEventListener(
        "click",
        closeRestorePreview
      );

      restoreBackupButton.addEventListener(
        "click",
        restoreSelectedBackup
      );

      window.addEventListener(
        "message",
        handleRestoreResult
      );
    }


    function loadBackupHistory() {
      backupRequestGeneration += 1;

      const generation =
        backupRequestGeneration;

      const callbackName =
        `backupHistoryCallback_${generation}`;

      const scriptId =
        "backup-history-feed";

      const previousScript =
        document.getElementById(
          scriptId
        );

      if (previousScript) {
        previousScript.remove();
      }

      backupTableBody.innerHTML = `
        <tr>
          <td
            colspan="7"
            class="manager-empty"
          >
            Loading backup history…
          </td>
        </tr>
      `;

      window[callbackName] =
        function(payload) {
          try {
            if (
              !payload ||
              payload.success !== true ||
              !Array.isArray(
                payload.backups
              )
            ) {
              throw new Error(
                payload &&
                payload.error
                  ? payload.error
                  : "The backup history feed is invalid."
              );
            }

            backupHistory =
              payload.backups;

            offlineSections.delete(
              "backups"
            );

            saveOfflineSnapshotSection(
              "backupHistory",
              backupHistory
            );

            updateOfflineModeBanner();

            closeBackupDetails();
            renderBackupHistory();

          } catch (error) {
            if (
              restoreBackupHistoryFromSnapshot(
                error.message || error
              )
            ) {
              return;
            }

            backupTableBody.innerHTML = `
              <tr>
                <td
                  colspan="7"
                  class="manager-empty"
                >
                  ${escapeHtml(
                    error.message || error
                  )}
                </td>
              </tr>
            `;
          } finally {
            delete window[callbackName];

            const script =
              document.getElementById(
                scriptId
              );

            if (script) {
              script.remove();
            }
          }
        };

      const script =
        document.createElement("script");

      script.id =
        scriptId;

      const separator =
        SCHEDULE_FEED_URL.includes("?")
          ? "&"
          : "?";

      script.src =
        `${SCHEDULE_FEED_URL}` +
        `${separator}action=backupManager` +
        `&callback=${callbackName}` +
        `&_=${Date.now()}`;

      script.onerror =
        function() {
          delete window[callbackName];

          if (
            restoreBackupHistoryFromSnapshot(
              "Could not load backup history from Apps Script."
            )
          ) {
            return;
          }

          backupTableBody.innerHTML = `
            <tr>
              <td
                colspan="7"
                class="manager-empty"
              >
                Could not load backup history from Apps Script.
              </td>
            </tr>
          `;
        };

      document.head.appendChild(
        script
      );
    }


    function renderBackupHistory() {
      const typeFilter =
        backupTypeFilter.value;

      const screenFilter =
        backupScreenFilter.value;

      const filtered =
        backupHistory.filter(item => {
          const typeMatches =
            typeFilter === "all" ||
            item.type === typeFilter;

          const screenMatches =
            screenFilter === "all" ||
            item.screen ===
              screenFilter;

          return (
            typeMatches &&
            screenMatches
          );
        });

      backupTotalCount.textContent =
        String(
          backupHistory.length
        );

      backupRegularCount.textContent =
        String(
          backupHistory.filter(
            item =>
              item.type === "regular"
          ).length
        );

      backupHolidayCount.textContent =
        String(
          backupHistory.filter(
            item =>
              item.type === "holiday"
          ).length
        );

      backupLatestTime.textContent =
        backupHistory.length > 0
          ? backupHistory[0].timestampDisplay
          : "—";

      if (filtered.length === 0) {
        backupTableBody.innerHTML = `
          <tr>
            <td
              colspan="7"
              class="manager-empty"
            >
              No backups match these filters.
            </td>
          </tr>
        `;

        return;
      }

      backupTableBody.innerHTML =
        filtered
          .map((item, index) => `
            <tr>
              <td>
                ${index + 1}
              </td>

              <td>
                ${escapeHtml(item.timestampDisplay)}
              </td>

              <td>
                <span
                  class="backup-type-badge backup-type-${escapeHtml(item.type)}"
                >
                  ${
                    item.type === "holiday"
                      ? "Holiday"
                      : "Regular"
                  }
                </span>
              </td>

              <td>
                ${escapeHtml(item.screen)}
              </td>

              <td>
                ${escapeHtml(item.rows)}
              </td>

              <td>
                <div class="backup-json">
                  ${escapeHtml(item.scheduleJson)}
                </div>
              </td>

              <td>
                <button
                  class="button"
                  type="button"
                  data-backup-id="${escapeHtml(item.id)}"
                >
                  View
                </button>
              </td>
            </tr>
          `)
          .join("");
    }


    function handleBackupTableClick(event) {
      const button =
        event.target.closest(
          "[data-backup-id]"
        );

      if (!button) {
        return;
      }

      const backup =
        backupHistory.find(
          item =>
            item.id ===
            button.dataset.backupId
        );

      if (!backup) {
        return;
      }

      openBackupDetails(
        backup
      );
    }


    function openBackupDetails(backup) {
      selectedBackup =
        backup;

      closeRestorePreview();

      backupDetailsTitle.textContent =
        `${backup.timestampDisplay} · ${backup.screen}`;

      try {
        const parsed =
          JSON.parse(
            backup.scheduleJson
          );

        backupDetailsJson.textContent =
          JSON.stringify(
            parsed,
            null,
            2
          );

      } catch (error) {
        backupDetailsJson.textContent =
          backup.scheduleJson;
      }

      backupDetails.classList.remove(
        "hidden"
      );

      backupDetails.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }


    function closeBackupDetails() {
      selectedBackup =
        null;

      closeRestorePreview();

      backupDetails.classList.add(
        "hidden"
      );

      backupDetailsTitle.textContent =
        "—";

      backupDetailsJson.textContent =
        "";
    }


    function prepareRestorePreview() {
      if (!selectedBackup) {
        return;
      }

      let backupRows;

      try {
        backupRows =
          JSON.parse(
            selectedBackup.scheduleJson
          );
      } catch (error) {
        restoreChangeList.innerHTML = `
          <div class="restore-change-item restore-change-removed">
            The selected backup contains invalid JSON and cannot be compared.
          </div>
        `;

        restorePreview.classList.add(
          "visible"
        );

        return;
      }

      if (!Array.isArray(backupRows)) {
        restoreChangeList.innerHTML = `
          <div class="restore-change-item restore-change-removed">
            The selected backup is not a schedule array.
          </div>
        `;

        restorePreview.classList.add(
          "visible"
        );

        return;
      }

      const currentRows =
        getCurrentRowsForBackup(
          selectedBackup
        );

      const differences =
        compareBackupRows(
          currentRows,
          backupRows,
          selectedBackup.type
        );

      restorePreviewTitle.textContent =
        `Preview restore · ${selectedBackup.timestampDisplay}`;

      restoreDestination.textContent =
        selectedBackup.screen;

      restoreCurrentRows.textContent =
        String(currentRows.length);

      restoreBackupRows.textContent =
        String(backupRows.length);

      restoreDifferenceCount.textContent =
        String(differences.length);

      restoreCurrentData.textContent =
        JSON.stringify(
          currentRows,
          null,
          2
        );

      restoreBackupData.textContent =
        JSON.stringify(
          backupRows,
          null,
          2
        );

      renderRestoreDifferences(
        differences
      );

      restorePreviewData = {
        backup:
          selectedBackup,
        backupRows:
          backupRows,
        currentRows:
          currentRows,
        differences:
          differences
      };

      restoreBackupButton.disabled =
        differences.length === 0 ||
        restoreInProgress;

      hideRestoreSaveMessage();

      restorePreview.classList.add(
        "visible"
      );

      restorePreview.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }


    function closeRestorePreview() {
      restorePreview.classList.remove(
        "visible"
      );

      restorePreviewTitle.textContent =
        "Restore preview";

      restoreDestination.textContent =
        "—";

      restoreCurrentRows.textContent =
        "0";

      restoreBackupRows.textContent =
        "0";

      restoreDifferenceCount.textContent =
        "0";

      restoreCurrentData.textContent =
        "";

      restoreBackupData.textContent =
        "";

      restoreChangeList.innerHTML =
        "";

      restorePreviewData =
        null;

      restoreBackupButton.disabled =
        true;

      hideRestoreSaveMessage();
    }


    function restoreSelectedBackup() {
      if (
        !restorePreviewData ||
        !selectedBackup
      ) {
        return;
      }

      const pin =
        window.prompt(
          `Enter the dashboard save PIN to restore "${selectedBackup.screen}":`
        );

      if (pin === null) {
        return;
      }

      if (!String(pin).trim()) {
        showRestoreSaveMessage(
          "A restore PIN is required.",
          "error"
        );
        return;
      }

      const confirmed =
        window.confirm(
          `Restore the selected ${selectedBackup.type === "holiday" ? "Holiday Override" : "regular schedule"} backup?\n\n` +
          `Destination: ${selectedBackup.screen}\n` +
          `Backup timestamp: ${selectedBackup.timestampDisplay}\n` +
          `Rows to restore: ${restorePreviewData.backupRows.length}\n\n` +
          `The current live data will be backed up again before restoration.`
        );

      if (!confirmed) {
        return;
      }

      activeRestoreRequestId =
        createSaveRequestId();

      restoreInProgress =
        true;

      restoreBackupButton.disabled =
        true;

      restoreBackupButton.textContent =
        "Restoring…";

      showRestoreSaveMessage(
        "Restoring the selected backup…",
        "success"
      );

      restoreBackupForm.action =
        SCHEDULE_FEED_URL;

      restorePinField.value =
        String(pin);

      restoreTypeField.value =
        selectedBackup.type;

      restoreScreenField.value =
        selectedBackup.screen;

      restoreDataField.value =
        JSON.stringify(
          restorePreviewData.backupRows
        );

      restoreRequestIdField.value =
        activeRestoreRequestId;

      restoreBackupForm.submit();

      restorePinField.value =
        "";
    }


    function handleRestoreResult(event) {
      const data =
        event.data;

      if (
        !data ||
        data.type !==
          "miniGolfBackupRestoreResult" ||
        data.requestId !==
          activeRestoreRequestId
      ) {
        return;
      }

      restoreInProgress =
        false;

      activeRestoreRequestId =
        null;

      restoreBackupButton.textContent =
        "Restore this backup";

      if (data.success !== true) {
        restoreBackupButton.disabled =
          false;

        showRestoreSaveMessage(
          data.error ||
          "Google Sheets did not accept the restore request.",
          "error"
        );

        return;
      }

      showRestoreSaveMessage(
        `Restored ${data.rowsWritten} row(s) to "${data.screen}". The previous live data was backed up first.`,
        "success"
      );

      if (
        auditLogWorkspace.classList.contains(
          "active"
        )
      ) {
        loadAuditLog();
      }

      restoreBackupButton.disabled =
        true;

      /*
       * Refresh every affected dashboard data source.
       */
      setTimeout(
        function() {
          refreshDashboard();
          loadHolidayOverrides();
          loadBackupHistory();

          setTimeout(
            prepareRestorePreview,
            700
          );
        },
        700
      );
    }


    function showRestoreSaveMessage(
      message,
      type
    ) {
      restoreSaveMessage.textContent =
        message;

      restoreSaveMessage.className =
        `restore-save-message visible ${type}`;
    }


    function hideRestoreSaveMessage() {
      restoreSaveMessage.textContent =
        "";

      restoreSaveMessage.className =
        "restore-save-message";
    }


    function getCurrentRowsForBackup(
      backup
    ) {
      if (backup.type === "holiday") {
        return holidayOverrides.map(
          item => ({
            screen:
              item.screen,

            startDate:
              item.startDate,

            endDate:
              item.endDate,

            startTime:
              item.startTime,

            image:
              item.image,

            fade:
              Number(item.fade)
          })
        );
      }

      const state =
        screenStates.get(
          backup.screen
        );

      if (
        !state ||
        state.error ||
        !Array.isArray(state.schedule)
      ) {
        return [];
      }

      return state.schedule.map(
        item => ({
          time:
            item.time,

          endTime:
            item.endTime || "",

          image:
            item.image,

          fade:
            Number(item.fade)
        })
      );
    }


    function compareBackupRows(
      currentRows,
      backupRows,
      backupType
    ) {
      const keyFunction =
        backupType === "holiday"
          ? createHolidayComparisonKey
          : createScheduleComparisonKey;

      const currentMap =
        createRowComparisonMap(
          currentRows,
          keyFunction
        );

      const backupMap =
        createRowComparisonMap(
          backupRows,
          keyFunction
        );

      const differences = [];

      backupMap.forEach(
        (backupRow, key) => {
          if (!currentMap.has(key)) {
            differences.push({
              type:
                "added",

              message:
                `Backup would add: ${describeComparisonRow(backupRow, backupType)}`
            });

            return;
          }

          const currentRow =
            currentMap.get(key);

          if (
            JSON.stringify(currentRow) !==
            JSON.stringify(backupRow)
          ) {
            differences.push({
              type:
                "modified",

              message:
                `Backup differs at ${describeComparisonKey(backupRow, backupType)}.`,

              current:
                currentRow,

              backup:
                backupRow
            });
          }
        }
      );

      currentMap.forEach(
        (currentRow, key) => {
          if (!backupMap.has(key)) {
            differences.push({
              type:
                "removed",

              message:
                `Restore would remove: ${describeComparisonRow(currentRow, backupType)}`
            });
          }
        }
      );

      return differences;
    }


    function createRowComparisonMap(
      rows,
      keyFunction
    ) {
      const map =
        new Map();

      rows.forEach(
        (row, index) => {
          let key =
            keyFunction(row);

          if (map.has(key)) {
            key =
              `${key}#${index}`;
          }

          map.set(
            key,
            normalizeComparisonRow(row)
          );
        }
      );

      return map;
    }


    function normalizeComparisonRow(row) {
      const normalized = {};

      Object.keys(row)
        .sort()
        .forEach(key => {
          normalized[key] =
            row[key];
        });

      return normalized;
    }


    function createScheduleComparisonKey(row) {
      return String(
        row.time || ""
      );
    }


    function createHolidayComparisonKey(row) {
      return [
        row.screen || "",
        row.startDate || "",
        row.endDate || "",
        row.startTime || ""
      ].join("|");
    }


    function describeComparisonKey(
      row,
      backupType
    ) {
      if (backupType === "holiday") {
        return (
          `${row.screen} · ` +
          `${row.startDate} → ${row.endDate} · ` +
          `${row.startTime}`
        );
      }

      return row.time;
    }


    function describeComparisonRow(
      row,
      backupType
    ) {
      if (backupType === "holiday") {
        return (
          `${row.screen} · ` +
          `${row.startDate} → ${row.endDate} · ` +
          `${row.startTime} · ` +
          `${row.image}`
        );
      }

      return (
        `${row.time}` +
        (
          row.endTime
            ? ` → ${row.endTime}`
            : ""
        ) +
        ` · ${row.image} · ` +
        `${row.fade} ms`
      );
    }


    function renderRestoreDifferences(
      differences
    ) {
      if (differences.length === 0) {
        restoreChangeList.innerHTML = `
          <div class="restore-change-item restore-change-none">
            The selected backup matches the current live data. Restoring it would make no changes.
          </div>
        `;

        return;
      }

      restoreChangeList.innerHTML =
        differences
          .map(item => {
            if (item.type === "modified") {
              return `
                <div class="restore-change-item restore-change-modified">
                  <strong>${escapeHtml(item.message)}</strong><br>
                  Current:
                  <code>${escapeHtml(JSON.stringify(item.current))}</code><br>
                  Backup:
                  <code>${escapeHtml(JSON.stringify(item.backup))}</code>
                </div>
              `;
            }

            return `
              <div class="restore-change-item restore-change-${escapeHtml(item.type)}">
                ${escapeHtml(item.message)}
              </div>
            `;
          })
          .join("");
    }

    /*
     * =====================================================
     * IMAGE LIBRARY — READ ONLY
     * =====================================================
     */

    function setupImageLibrary() {
      imageLibraryScreenFilter.innerHTML =
        `
          <option value="all">
            All screens
          </option>
          <option value="Holiday Overrides">
            Holiday Overrides
          </option>
        ` +
        SCREEN_NAMES
          .map(screenName => `
            <option value="${escapeHtml(screenName)}">
              ${escapeHtml(screenName)}
            </option>
          `)
          .join("");

      imageLibrarySearch.addEventListener(
        "input",
        renderImageLibrary
      );

      imageLibrarySourceFilter.addEventListener(
        "change",
        renderImageLibrary
      );

      imageLibraryScreenFilter.addEventListener(
        "change",
        renderImageLibrary
      );

      reloadImageLibraryButton.addEventListener(
        "click",
        rebuildImageLibrary
      );

      scanImageHealthButton.addEventListener(
        "click",
        async function() {
          try {
            await scanImageHealth();
          } catch (error) {
            /*
             * The Image Library already displays the error.
             */
          }
        }
      );

      clearImageHealthButton.addEventListener(
        "click",
        clearImageHealthScan
      );
    }


    function rebuildImageLibrary() {
      const imageMap =
        new Map();

      screenStates.forEach(state => {
        if (
          state.error ||
          !Array.isArray(state.schedule)
        ) {
          return;
        }

        state.schedule.forEach(item => {
          addImageLibraryUsage(
            imageMap,
            item.image,
            {
              source:
                "regular",

              screen:
                state.screenName,

              time:
                item.time,

              endTime:
                item.endTime || "",

              fade:
                Number(item.fade)
            }
          );
        });
      });

      holidayOverrides.forEach(item => {
        if (!item.image) {
          return;
        }

        addImageLibraryUsage(
          imageMap,
          item.image,
          {
            source:
              "holiday",

            screen:
              item.screen || "Holiday Overrides",

            startDate:
              item.startDate || "",

            endDate:
              item.endDate || "",

            time:
              item.startTime || "",

            fade:
              Number(item.fade)
          }
        );
      });

      imageLibraryIndex =
        Array.from(
          imageMap.values()
        )
          .map(entry => ({
            ...entry,

            usages:
              entry.usages.sort(
                compareImageLibraryUsages
              )
          }))
          .sort((a, b) =>
            a.filename.localeCompare(
              b.filename
            )
          );

      renderImageLibrary();
    }


    function addImageLibraryUsage(
      imageMap,
      filename,
      usage
    ) {
      const cleanFilename =
        String(filename || "")
          .trim();

      if (!cleanFilename) {
        return;
      }

      const key =
        cleanFilename.toLowerCase();

      if (!imageMap.has(key)) {
        imageMap.set(
          key,
          {
            filename:
              cleanFilename,

            usages:
              []
          }
        );
      }

      imageMap
        .get(key)
        .usages
        .push(usage);
    }


    function compareImageLibraryUsages(
      a,
      b
    ) {
      const sourceCompare =
        a.source.localeCompare(
          b.source
        );

      if (sourceCompare !== 0) {
        return sourceCompare;
      }

      const screenCompare =
        String(a.screen)
          .localeCompare(
            String(b.screen)
          );

      if (screenCompare !== 0) {
        return screenCompare;
      }

      return String(a.time || "")
        .localeCompare(
          String(b.time || "")
        );
    }


    function renderImageLibrary() {
      const query =
        imageLibrarySearch.value
          .trim()
          .toLowerCase();

      const sourceFilter =
        imageLibrarySourceFilter.value;

      const screenFilter =
        imageLibraryScreenFilter.value;

      const filteredImages =
        imageLibraryIndex
          .map(image => {
            const matchingUsages =
              image.usages.filter(usage => {
                const sourceMatches =
                  sourceFilter === "all" ||
                  usage.source ===
                    sourceFilter;

                const screenMatches =
                  screenFilter === "all" ||
                  usage.screen ===
                    screenFilter;

                return (
                  sourceMatches &&
                  screenMatches
                );
              });

            return {
              ...image,
              matchingUsages
            };
          })
          .filter(image => {
            const nameMatches =
              !query ||
              image.filename
                .toLowerCase()
                .includes(query);

            return (
              nameMatches &&
              image.matchingUsages.length > 0
            );
          });

      const totalUsages =
        imageLibraryIndex.reduce(
          (total, image) =>
            total +
            image.usages.length,
          0
        );

      const regularUsages =
        imageLibraryIndex.reduce(
          (total, image) =>
            total +
            image.usages.filter(
              usage =>
                usage.source ===
                "regular"
            ).length,
          0
        );

      const holidayUsages =
        imageLibraryIndex.reduce(
          (total, image) =>
            total +
            image.usages.filter(
              usage =>
                usage.source ===
                "holiday"
            ).length,
          0
        );

      imageLibraryUniqueCount.textContent =
        String(
          imageLibraryIndex.length
        );

      imageLibraryUsageCount.textContent =
        String(
          totalUsages
        );

      imageLibraryRegularCount.textContent =
        String(
          regularUsages
        );

      imageLibraryHolidayCount.textContent =
        String(
          holidayUsages
        );

      if (
        imageLibraryIndex.length === 0
      ) {
        imageLibraryGrid.innerHTML = `
          <div class="image-library-empty">
            No image references are available yet. Wait for schedules to finish loading, then click Rebuild index.
          </div>
        `;

        return;
      }

      if (
        filteredImages.length === 0
      ) {
        imageLibraryGrid.innerHTML = `
          <div class="image-library-empty">
            No images match the current search and filters.
          </div>
        `;

        return;
      }

      imageLibraryGrid.innerHTML =
        filteredImages
          .map(image =>
            createImageLibraryCard(
              image
            )
          )
          .join("");
    }


    function createImageLibraryCard(
      image
    ) {
      const regularCount =
        image.usages.filter(
          usage =>
            usage.source ===
            "regular"
        ).length;

      const holidayCount =
        image.usages.filter(
          usage =>
            usage.source ===
            "holiday"
        ).length;

      const safeCardId =
        createSafeId(
          image.filename
        );

      const normalizedFilename =
        normalizeRepositoryPath(
          image.filename
        );

      const isMissing =
        Array.from(
          missingReferencedImages
        ).some(
          filename =>
            normalizeRepositoryPath(
              filename
            ) === normalizedFilename
        );

      return `
        <article class="image-library-card ${isMissing ? "image-missing" : ""}">
          <div class="image-library-preview">
            ${
              imageHealthScanned
                ? `
                  <span class="image-library-card-status ${isMissing ? "missing" : "healthy"}">
                    ${isMissing ? "Missing" : "Available"}
                  </span>
                `
                : ""
            }
            <img
              src="${buildImageUrl(image.filename)}"
              alt="${escapeHtml(image.filename)}"
              onerror="
                this.style.display='none';
                document.getElementById(
                  'image-error-${safeCardId}'
                ).classList.add('visible');
              "
            >

            <div
              id="image-error-${safeCardId}"
              class="image-library-preview-error"
            >
              Image unavailable:
              ${escapeHtml(image.filename)}
            </div>
          </div>

          <div class="image-library-card-body">
            <div class="image-library-name">
              ${escapeHtml(image.filename)}
            </div>

            <div class="image-library-meta">
              <span class="image-library-badge image-library-badge-count">
                ${image.usages.length}
                usage${image.usages.length === 1 ? "" : "s"}
              </span>

              ${
                regularCount > 0
                  ? `
                    <span class="image-library-badge image-library-badge-regular">
                      ${regularCount} regular
                    </span>
                  `
                  : ""
              }

              ${
                holidayCount > 0
                  ? `
                    <span class="image-library-badge image-library-badge-holiday">
                      ${holidayCount} holiday
                    </span>
                  `
                  : ""
              }
            </div>

            <div class="image-library-usage-list">
              ${image.matchingUsages
                .map(usage =>
                  createImageLibraryUsage(
                    usage
                  )
                )
                .join("")}
            </div>
          </div>
        </article>
      `;
    }


    function createImageLibraryUsage(
      usage
    ) {
      if (
        usage.source === "holiday"
      ) {
        return `
          <div class="image-library-usage">
            <div class="image-library-usage-title">
              ${escapeHtml(usage.screen)}
            </div>

            <div class="image-library-usage-detail">
              Holiday ·
              ${escapeHtml(usage.startDate || "—")}
              →
              ${escapeHtml(usage.endDate || "—")}
              ·
              ${escapeHtml(usage.time || "—")}
              ·
              ${escapeHtml(usage.fade)} ms
            </div>
          </div>
        `;
      }

      return `
        <div class="image-library-usage">
          <div class="image-library-usage-title">
            ${escapeHtml(usage.screen)}
          </div>

          <div class="image-library-usage-detail">
            Regular ·
            ${escapeHtml(usage.time || "—")}
            ${
              usage.endTime
                ? `→ ${escapeHtml(usage.endTime)}`
                : ""
            }
            ·
            ${escapeHtml(usage.fade)} ms
          </div>
        </div>
      `;
    }

    /*
     * =====================================================
     * GITHUB IMAGE PICKER
     * =====================================================
     */

    function setupGitHubImagePicker() {
      /*
       * Use direct listeners for the fixed modal controls.
       * stopPropagation prevents clicks inside the panel from
       * being mistaken for backdrop clicks.
       */
      closeImagePickerButton.addEventListener(
        "click",
        function(event) {
          event.preventDefault();
          event.stopPropagation();
          closeGitHubImagePicker();
        }
      );

      const pickerPanel =
        imagePickerDialog.querySelector(
          ".image-picker-panel"
        );

      if (pickerPanel) {
        pickerPanel.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
          }
        );
      }

      imagePickerDialog.addEventListener(
        "click",
        function(event) {
          if (
            event.target ===
            imagePickerDialog
          ) {
            closeGitHubImagePicker();
          }
        }
      );

      document.addEventListener(
        "keydown",
        function(event) {
          if (
            event.key === "Escape" &&
            imagePickerDialog.classList.contains(
              "visible"
            )
          ) {
            closeGitHubImagePicker();
          }
        }
      );

      /*
       * Render on every input event. requestAnimationFrame
       * keeps rapid typing smooth and avoids stale results.
       */
      let pickerSearchFrame =
        null;

      imagePickerSearch.addEventListener(
        "input",
        function() {
          if (pickerSearchFrame) {
            cancelAnimationFrame(
              pickerSearchFrame
            );
          }

          pickerSearchFrame =
            requestAnimationFrame(
              function() {
                pickerSearchFrame =
                  null;

                renderGitHubImagePicker();
              }
            );
        }
      );

      /*
       * Event delegation survives every grid rebuild.
       */
      imagePickerGrid.addEventListener(
        "click",
        function(event) {
          const card =
            event.target.closest(
              "[data-picker-filename]"
            );

          if (
            !card ||
            !activeImagePickerInput
          ) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          const exactFilename =
            card.dataset.pickerFilename;

          activeImagePickerInput.value =
            exactFilename;

          activeImagePickerInput.dispatchEvent(
            new Event(
              "input",
              {
                bubbles: true
              }
            )
          );

          closeGitHubImagePicker();
        }
      );
    }


    async function openGitHubImagePicker(
      input
    ) {
      if (!input) {
        return;
      }

      activeImagePickerInput =
        input;

      /*
       * Start with an empty search so every repository image
       * is visible. The user can then type a fresh query.
       */
      imagePickerSearch.value =
        "";

      imagePickerDialog.classList.add(
        "visible"
      );

      imagePickerDialog.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow =
        "hidden";

      if (
        repositoryImages.length === 0
      ) {
        imagePickerGrid.innerHTML = `
          <div class="image-picker-empty">
            Loading exact filenames from GitHub…
          </div>
        `;

        try {
          repositoryImages =
            await fetchRepositoryImageFiles();

          imageHealthScanned =
            true;

          renderGitHubImagePicker();
          updateVisibleImagePickerStatuses();

        } catch (error) {
          imagePickerGrid.innerHTML = `
            <div class="image-picker-empty">
              ${escapeHtml(
                error.message ||
                "Could not load GitHub images."
              )}
            </div>
          `;

          return;
        }
      }

      renderGitHubImagePicker();

      setTimeout(
        function() {
          imagePickerSearch.focus();
        },
        50
      );
    }


    function closeGitHubImagePicker() {
      imagePickerDialog.classList.remove(
        "visible"
      );

      imagePickerDialog.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.style.overflow =
        "";

      imagePickerSearch.value =
        "";

      /*
       * Release the field only after the modal is visually
       * closed. This prevents late click events from writing
       * to an old input.
       */
      activeImagePickerInput =
        null;

      if (
        document.activeElement &&
        typeof document.activeElement.blur ===
          "function"
      ) {
        document.activeElement.blur();
      }
    }


    function normalizeImagePickerSearchText(
      value
    ) {
      return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }


    function renderGitHubImagePicker() {
      const query =
        normalizeImagePickerSearchText(
          imagePickerSearch.value
        );

      const images =
        repositoryImages
          .filter(
            filename =>
              isImageFilename(
                filename
              )
          )
          .filter(
            filename =>
              !query ||
              normalizeImagePickerSearchText(
                filename
              ).includes(query)
          )
          .sort((a, b) =>
            a.localeCompare(
              b,
              undefined,
              {
                sensitivity:
                  "variant"
              }
            )
          );

      if (images.length === 0) {
        imagePickerGrid.innerHTML = `
          <div class="image-picker-empty">
            No repository images match this search.
          </div>
        `;

        return;
      }

      imagePickerGrid.innerHTML =
        images
          .map(filename => `
            <article
              class="image-picker-card"
              data-picker-filename="${escapeHtml(filename)}"
              title="${escapeHtml(filename)}"
            >
              <div class="image-picker-thumb">
                <img
                  src="${buildImageUrl(filename)}"
                  alt=""
                >
              </div>

              <div class="image-picker-card-name">
                ${escapeHtml(filename)}
              </div>
            </article>
          `)
          .join("");
    }


    function validateRepositoryFilenames(
      rows
    ) {
      const issues = [];

      if (
        !imageHealthScanned ||
        repositoryImages.length === 0
      ) {
        return {
          scanned:
            false,

          valid:
            true,

          issues:
            []
        };
      }

      rows.forEach((item, index) => {
        const typed =
          String(
            item.image || ""
          ).trim();

        if (!typed) {
          return;
        }

        const exact =
          findExactRepositoryFilename(
            typed
          );

        if (!exact) {
          issues.push({
            rowIndex:
              index,

            typed:
              typed,

            exact:
              null,

            type:
              "missing"
          });

          return;
        }

        if (exact !== typed) {
          issues.push({
            rowIndex:
              index,

            typed:
              typed,

            exact:
              exact,

            type:
              "capitalization"
          });
        }
      });

      return {
        scanned:
          true,

        valid:
          issues.length === 0,

        issues:
          issues
      };
    }


    function renderRepositoryWarning(
      container,
      validation,
      kind
    ) {
      container.className =
        "repository-save-warning";

      container.innerHTML =
        "";

      if (!validation.scanned) {
        container.classList.add(
          "visible"
        );

        container.textContent =
          "GitHub has not been scanned. Saving is still allowed, but filenames cannot be verified.";

        return;
      }

      if (validation.valid) {
        return;
      }

      const lines =
        validation.issues.map(issue => {
          const rowNumber =
            issue.rowIndex + 1;

          if (
            issue.type ===
            "capitalization"
          ) {
            return (
              `Row ${rowNumber}: "${issue.typed}" should be "${issue.exact}".` +
              ` <button class="repository-fix-button" type="button" ` +
              `data-fix-repository-name="${escapeHtml(issue.exact)}" ` +
              `data-fix-repository-row="${issue.rowIndex}" ` +
              `data-fix-repository-kind="${kind}">Use exact name</button>`
            );
          }

          return (
            `Row ${rowNumber}: "${issue.typed}" was not found in GitHub.`
          );
        });

      container.classList.add(
        "visible"
      );

      container.innerHTML =
        `<strong>Repository validation failed:</strong><br>` +
        lines.join("<br>");
    }


    function applyRepositoryNameFix(
      kind,
      rowIndex,
      exactName
    ) {
      if (kind === "regular") {
        const screenName =
          managerScreenSelect.value;

        const draft =
          managerDrafts.get(
            screenName
          );

        if (
          !draft ||
          !draft[rowIndex]
        ) {
          return;
        }

        draft[rowIndex].image =
          exactName;

        persistScheduleDraft(
          screenName,
          draft
        );

        updateScheduleManager();
        return;
      }

      if (
        kind === "holiday" &&
        holidayDraft &&
        holidayDraft[rowIndex]
      ) {
        holidayDraft[rowIndex].image =
          exactName;

        persistHolidayDraft(
          holidayDraft
        );

        renderHolidayOverrides();
      }
    }


    function findExactRepositoryFilename(
      typedFilename
    ) {
      const normalized =
        normalizeRepositoryPath(
          typedFilename
        );

      return repositoryImages.find(
        filename =>
          normalizeRepositoryPath(
            filename
          ) === normalized
      ) || null;
    }


    function updateVisibleImagePickerStatuses() {
      document
        .querySelectorAll(
          "[data-image-picker-input]"
        )
        .forEach(input => {
          const kind =
            input.dataset.imagePickerInput;

          const rowIndex =
            input.dataset.rowIndex;

          const status =
            document.querySelector(
              `[data-image-picker-status="${kind}"][data-row-index="${rowIndex}"]`
            );

          if (!status) {
            return;
          }

          const value =
            String(
              input.value || ""
            ).trim();

          status.className =
            "image-picker-status";

          if (!value) {
            status.textContent =
              "";

            return;
          }

          if (
            repositoryImages.length === 0
          ) {
            status.textContent =
              "Repository not scanned yet.";

            return;
          }

          const exact =
            findExactRepositoryFilename(
              value
            );

          if (!exact) {
            status.classList.add(
              "invalid"
            );

            status.textContent =
              "Not found in GitHub repository.";

            return;
          }

          if (exact !== value) {
            status.classList.add(
              "invalid"
            );

            status.textContent =
              `Capitalization mismatch. Exact name: ${exact}`;

            return;
          }

          status.classList.add(
            "valid"
          );

          status.textContent =
            "Exact GitHub filename.";
        });
    }


    /*
     * =====================================================
     * IMAGE HEALTH — MISSING AND UNUSED DETECTION
     * =====================================================
     */

    async function scanGitHubImagesFromHolidayManager() {
      holidayGitHubScanButton.disabled =
        true;

      holidayGitHubScanButton.textContent =
        "Scanning…";

      holidayGitHubScanStatus.className =
        "manager-github-scan-text";

      holidayGitHubScanStatus.textContent =
        "Reading exact filenames from the GitHub repository…";

      try {
        await scanImageHealth();

        if (!imageHealthScanned) {
          throw new Error(
            "The GitHub scan did not finish successfully."
          );
        }

        holidayGitHubScanStatus.className =
          "manager-github-scan-text success";

        holidayGitHubScanStatus.textContent =
          `${repositoryImages.length} repository image(s) loaded · ` +
          `${missingReferencedImages.size} missing reference(s) · ` +
          `${unusedRepositoryImages.size} unused file(s).`;

        updateVisibleImagePickerStatuses();

        const rows =
          holidayDraft ||
          holidayOverrides;

        renderRepositoryWarning(
          holidayRepositoryWarning,
          validateRepositoryFilenames(
            rows
          ),
          "holiday"
        );

      } catch (error) {
        holidayGitHubScanStatus.className =
          "manager-github-scan-text error";

        holidayGitHubScanStatus.textContent =
          error.message ||
          "The GitHub image scan failed.";

      } finally {
        holidayGitHubScanButton.disabled =
          false;

        holidayGitHubScanButton.textContent =
          "Scan GitHub images";
      }
    }


    async function scanGitHubImagesFromScheduleManager() {
      managerGitHubScanButton.disabled =
        true;

      managerGitHubScanButton.textContent =
        "Scanning…";

      managerGitHubScanStatus.className =
        "manager-github-scan-text";

      managerGitHubScanStatus.textContent =
        "Reading exact filenames from the GitHub repository…";

      try {
        await scanImageHealth();

        if (!imageHealthScanned) {
          throw new Error(
            "The GitHub scan did not finish successfully."
          );
        }

        managerGitHubScanStatus.className =
          "manager-github-scan-text success";

        managerGitHubScanStatus.textContent =
          `${repositoryImages.length} repository image(s) loaded · ` +
          `${missingReferencedImages.size} missing reference(s) · ` +
          `${unusedRepositoryImages.size} unused file(s).`;

        updateVisibleImagePickerStatuses();

      } catch (error) {
        managerGitHubScanStatus.className =
          "manager-github-scan-text error";

        managerGitHubScanStatus.textContent =
          error.message ||
          "The GitHub image scan failed.";

      } finally {
        managerGitHubScanButton.disabled =
          false;

        managerGitHubScanButton.textContent =
          "Scan GitHub images";
      }
    }


    async function scanImageHealth() {
      scanImageHealthButton.disabled =
        true;

      scanImageHealthButton.textContent =
        "Scanning…";

      clearImageHealthButton.disabled =
        true;

      imageHealthStatus.className =
        "image-health-status";

      imageHealthStatus.textContent =
        "Reading repository files and checking referenced images…";

      try {
        repositoryImages =
          await fetchRepositoryImageFiles();

        const repositoryExactByNormalized =
          new Map();

        repositoryImages.forEach(
          exactFilename => {
            repositoryExactByNormalized.set(
              normalizeRepositoryPath(
                exactFilename
              ),
              exactFilename
            );
          }
        );

        const referencedExactByNormalized =
          new Map();

        imageLibraryIndex.forEach(
          image => {
            referencedExactByNormalized.set(
              normalizeRepositoryPath(
                image.filename
              ),
              image.filename
            );
          }
        );

        missingReferencedImages =
          new Set(
            Array.from(
              referencedExactByNormalized.entries()
            )
              .filter(
                ([normalized]) =>
                  !repositoryExactByNormalized.has(
                    normalized
                  )
              )
              .map(
                ([, exactFilename]) =>
                  exactFilename
              )
          );

        unusedRepositoryImages =
          new Set(
            Array.from(
              repositoryExactByNormalized.entries()
            )
              .filter(
                ([normalized, exactFilename]) =>
                  !referencedExactByNormalized.has(
                    normalized
                  ) &&
                  !isDashboardAsset(
                    exactFilename
                  )
              )
              .map(
                ([, exactFilename]) =>
                  exactFilename
              )
          );

        imageHealthScanned =
          true;

        repositoryImageCount.textContent =
          String(
            repositoryImages.length
          );

        missingImageCount.textContent =
          String(
            missingReferencedImages.size
          );

        unusedImageCount.textContent =
          String(
            unusedRepositoryImages.size
          );

        imageHealthStatus.textContent =
          `Scan complete · ${new Date().toLocaleTimeString()}`;

        managerGitHubScanStatus.className =
          "manager-github-scan-text success";

        managerGitHubScanStatus.textContent =
          `${repositoryImages.length} GitHub image(s) currently loaded.`;

        holidayGitHubScanStatus.className =
          "manager-github-scan-text success";

        holidayGitHubScanStatus.textContent =
          `${repositoryImages.length} GitHub image(s) currently loaded.`;

        renderImageHealthList();
        renderImageLibrary();
        updateVisibleImagePickerStatuses();

        clearImageHealthButton.disabled =
          false;

      } catch (error) {
        imageHealthScanned =
          false;

        imageHealthStatus.className =
          "image-health-status error";

        imageHealthStatus.textContent =
          error.message ||
          "The GitHub image scan failed.";

        throw error;

      } finally {
        scanImageHealthButton.disabled =
          false;

        scanImageHealthButton.textContent =
          "Scan GitHub images";
      }
    }


    async function fetchRepositoryImageFiles() {
      /*
       * Fast path:
       * use the generated static index from GitHub Pages.
       */
      try {
        const indexResponse =
          await fetch(
            `${GITHUB_IMAGE_INDEX_FILE}?_=${Date.now()}`,
            {
              cache:
                "no-store"
            }
          );

        if (indexResponse.ok) {
          const indexPayload =
            await indexResponse.json();

          if (
            indexPayload &&
            Array.isArray(
              indexPayload.images
            )
          ) {
            const indexedImages =
              indexPayload.images
                .map(item =>
                  typeof item === "string"
                    ? item
                    : item && item.path
                      ? item.path
                      : ""
                )
                .filter(
                  filename =>
                    isImageFilename(
                      filename
                    )
                );

            if (
              indexedImages.length > 0
            ) {
              return indexedImages;
            }
          }
        }

      } catch (error) {
        console.warn(
          "The static image index could not be loaded. Falling back to the GitHub API.",
          error
        );
      }

      /*
       * Safe fallback:
       * query the GitHub tree API when the generated index
       * is missing, invalid, or outdated.
       */
      const url =
        `https://api.github.com/repos/` +
        `${GITHUB_REPOSITORY}/git/trees/` +
        `${encodeURIComponent(GITHUB_BRANCH)}` +
        `?recursive=1`;

      const response =
        await fetch(
          url,
          {
            headers: {
              Accept:
                "application/vnd.github+json"
            }
          }
        );

      if (!response.ok) {
        if (
          response.status === 403 ||
          response.status === 429
        ) {
          throw new Error(
            "GitHub API rate limit reached and image-index.json was unavailable."
          );
        }

        if (
          response.status === 404
        ) {
          throw new Error(
            "The configured GitHub repository, branch, or image index could not be found."
          );
        }

        throw new Error(
          `GitHub returned HTTP ${response.status}.`
        );
      }

      const payload =
        await response.json();

      if (
        !payload ||
        !Array.isArray(
          payload.tree
        )
      ) {
        throw new Error(
          "GitHub returned an invalid repository file list."
        );
      }

      if (
        payload.truncated === true
      ) {
        throw new Error(
          "The GitHub repository file list was truncated and cannot be checked safely."
        );
      }

      return payload.tree
        .filter(item =>
          item.type === "blob" &&
          isImageFilename(
            item.path
          )
        )
        .map(item =>
          item.path
        );
    }


    function isImageFilename(filename) {
      return /\.(png|jpe?g|gif|webp|avif|svg)$/i
        .test(
          String(filename || "")
        );
    }


    function normalizeRepositoryPath(path) {
      return decodeURIComponent(
        String(path || "")
      )
        .replace(/^\.?\//, "")
        .replace(/\\/g, "/")
        .trim()
        .toLowerCase();
    }


    function isDashboardAsset(filename) {
      const basename =
        filename
          .split("/")
          .pop();

      return [
        "dashboard-logo.png",
        "favicon.png",
        "favicon.jpg",
        "dashboard-logo.jpg"
      ].includes(
        basename
      );
    }


    function renderImageHealthList() {
      const items = [];

      Array.from(
        missingReferencedImages
      )
        .sort()
        .forEach(filename => {
          items.push(`
            <div class="image-health-item">
              <div class="image-health-name">
                ${escapeHtml(filename)}
              </div>

              <span class="image-health-tag image-health-tag-missing">
                Missing
              </span>
            </div>
          `);
        });

      Array.from(
        unusedRepositoryImages
      )
        .sort()
        .forEach(filename => {
          items.push(`
            <div class="image-health-item">
              <div class="image-health-name">
                ${escapeHtml(filename)}
              </div>

              <span class="image-health-tag image-health-tag-unused">
                Unused
              </span>
            </div>
          `);
        });

      if (items.length === 0) {
        imageHealthList.innerHTML = `
          <div class="image-health-item">
            <div class="image-health-name">
              Every referenced image exists, and no unused signage images were detected.
            </div>

            <span class="image-health-tag image-health-tag-ok">
              Healthy
            </span>
          </div>
        `;

        return;
      }

      imageHealthList.innerHTML =
        items.join("");
    }


    function clearImageHealthScan() {
      repositoryImages = [];

      missingReferencedImages =
        new Set();

      unusedRepositoryImages =
        new Set();

      imageHealthScanned =
        false;

      repositoryImageCount.textContent =
        "—";

      missingImageCount.textContent =
        "—";

      unusedImageCount.textContent =
        "—";

      imageHealthStatus.className =
        "image-health-status";

      imageHealthStatus.textContent =
        "Not scanned yet.";

      imageHealthList.innerHTML =
        "";

      clearImageHealthButton.disabled =
        true;

      renderImageLibrary();
    }

    /*
     * =====================================================
     * LOCAL DRAFT RECOVERY
     * =====================================================
     */

    function getScheduleDraftStorageKey(
      screenName
    ) {
      return (
        LOCAL_DRAFT_STORAGE
          .regularPrefix +
        screenName
      );
    }


    function persistScheduleDraft(
      screenName,
      draft
    ) {
      try {
        localStorage.setItem(
          getScheduleDraftStorageKey(
            screenName
          ),
          JSON.stringify({
            savedAt:
              new Date()
                .toISOString(),

            screen:
              screenName,

            rows:
              draft
          })
        );

        updateScheduleDraftRecoveryBanner();

      } catch (error) {
        console.warn(
          "Schedule draft could not be saved locally.",
          error
        );
      }
    }


    function readStoredScheduleDraft(
      screenName
    ) {
      try {
        const raw =
          localStorage.getItem(
            getScheduleDraftStorageKey(
              screenName
            )
          );

        if (!raw) {
          return null;
        }

        const parsed =
          JSON.parse(raw);

        if (
          !parsed ||
          !Array.isArray(
            parsed.rows
          )
        ) {
          return null;
        }

        return parsed;

      } catch (error) {
        return null;
      }
    }


    function removeStoredScheduleDraft(
      screenName
    ) {
      try {
        localStorage.removeItem(
          getScheduleDraftStorageKey(
            screenName
          )
        );
      } catch (error) {}

      updateScheduleDraftRecoveryBanner();
    }


    function updateScheduleDraftRecoveryBanner() {
      const screenName =
        managerScreenSelect.value;

      const stored =
        readStoredScheduleDraft(
          screenName
        );

      const shouldShow =
        Boolean(stored) &&
        !managerDrafts.has(
          screenName
        );

      scheduleDraftRecoveryBanner.classList.toggle(
        "visible",
        shouldShow
      );

      if (!shouldShow) {
        return;
      }

      const savedTime =
        stored.savedAt
          ? new Date(
              stored.savedAt
            ).toLocaleString()
          : "an unknown time";

      scheduleDraftRecoveryText.textContent =
        `A local draft for "${screenName}" was saved at ${savedTime}.`;
    }


    function restoreStoredScheduleDraft() {
      const screenName =
        managerScreenSelect.value;

      const stored =
        readStoredScheduleDraft(
          screenName
        );

      if (!stored) {
        updateScheduleDraftRecoveryBanner();
        return;
      }

      managerDrafts.set(
        screenName,
        stored.rows.map(item => ({
          ...item,
          endTime:
            item.endTime || ""
        }))
      );

      managerEditingEnabled =
        true;

      updateManagerEditingControls();
      updateScheduleDraftRecoveryBanner();
      updateScheduleManager();
    }


    function discardStoredScheduleDraft() {
      const screenName =
        managerScreenSelect.value;

      removeStoredScheduleDraft(
        screenName
      );
    }


    function persistHolidayDraft(
      draft
    ) {
      try {
        localStorage.setItem(
          LOCAL_DRAFT_STORAGE
            .holidayKey,
          JSON.stringify({
            savedAt:
              new Date()
                .toISOString(),

            rows:
              draft
          })
        );

        updateHolidayDraftRecoveryBanner();

      } catch (error) {
        console.warn(
          "Holiday draft could not be saved locally.",
          error
        );
      }
    }


    function readStoredHolidayDraft() {
      try {
        const raw =
          localStorage.getItem(
            LOCAL_DRAFT_STORAGE
              .holidayKey
          );

        if (!raw) {
          return null;
        }

        const parsed =
          JSON.parse(raw);

        if (
          !parsed ||
          !Array.isArray(
            parsed.rows
          )
        ) {
          return null;
        }

        return parsed;

      } catch (error) {
        return null;
      }
    }


    function removeStoredHolidayDraft() {
      try {
        localStorage.removeItem(
          LOCAL_DRAFT_STORAGE
            .holidayKey
        );
      } catch (error) {}

      updateHolidayDraftRecoveryBanner();
    }


    function updateHolidayDraftRecoveryBanner() {
      const stored =
        readStoredHolidayDraft();

      const shouldShow =
        Boolean(stored) &&
        !holidayDraft;

      holidayDraftRecoveryBanner.classList.toggle(
        "visible",
        shouldShow
      );

      if (!shouldShow) {
        return;
      }

      const savedTime =
        stored.savedAt
          ? new Date(
              stored.savedAt
            ).toLocaleString()
          : "an unknown time";

      holidayDraftRecoveryText.textContent =
        `A local Holiday Override draft was saved at ${savedTime}.`;
    }


    function restoreStoredHolidayDraft() {
      const stored =
        readStoredHolidayDraft();

      if (!stored) {
        updateHolidayDraftRecoveryBanner();
        return;
      }

      holidayDraft =
        stored.rows;

      holidayEditingEnabled =
        true;

      updateHolidayEditingControls();
      updateHolidayDraftRecoveryBanner();
      renderHolidayOverrides();
    }


    function discardStoredHolidayDraft() {
      removeStoredHolidayDraft();
    }


    function initializeDraftRecovery() {
      updateScheduleDraftRecoveryBanner();
      updateHolidayDraftRecoveryBanner();
    }

    /*
     * =====================================================
     * CHANGE AUDIT LOG
     * =====================================================
     */

    function setupAuditLog() {
      auditDestinationFilter.innerHTML =
        `
          <option value="all">
            All destinations
          </option>
          <option value="Holiday Overrides">
            Holiday Overrides
          </option>
        ` +
        SCREEN_NAMES
          .map(screenName => `
            <option value="${escapeHtml(screenName)}">
              ${escapeHtml(screenName)}
            </option>
          `)
          .join("");

      auditActionFilter.addEventListener(
        "change",
        renderAuditLog
      );

      auditStatusFilter.addEventListener(
        "change",
        renderAuditLog
      );

      auditDestinationFilter.addEventListener(
        "change",
        renderAuditLog
      );

      reloadAuditButton.addEventListener(
        "click",
        loadAuditLog
      );
    }


    function loadAuditLog() {
      auditRequestGeneration += 1;

      const generation =
        auditRequestGeneration;

      const callbackName =
        `auditLogCallback_${generation}`;

      const scriptId =
        "audit-log-feed";

      const previousScript =
        document.getElementById(
          scriptId
        );

      if (previousScript) {
        previousScript.remove();
      }

      auditTableBody.innerHTML = `
        <tr>
          <td
            colspan="7"
            class="manager-empty"
          >
            Loading audit log…
          </td>
        </tr>
      `;

      window[callbackName] =
        function(payload) {
          try {
            if (
              !payload ||
              payload.success !== true ||
              !Array.isArray(
                payload.entries
              )
            ) {
              throw new Error(
                payload &&
                payload.error
                  ? payload.error
                  : "The audit log feed is invalid."
              );
            }

            auditEntries =
              payload.entries;

            offlineSections.delete(
              "audit"
            );

            saveOfflineSnapshotSection(
              "auditEntries",
              auditEntries
            );

            updateOfflineModeBanner();
            renderAuditLog();

          } catch (error) {
            if (
              restoreAuditLogFromSnapshot(
                error.message || error
              )
            ) {
              return;
            }

            auditTableBody.innerHTML = `
              <tr>
                <td
                  colspan="7"
                  class="manager-empty"
                >
                  ${escapeHtml(
                    error.message || error
                  )}
                </td>
              </tr>
            `;
          } finally {
            delete window[callbackName];

            const script =
              document.getElementById(
                scriptId
              );

            if (script) {
              script.remove();
            }
          }
        };

      const script =
        document.createElement("script");

      script.id =
        scriptId;

      const separator =
        SCHEDULE_FEED_URL.includes("?")
          ? "&"
          : "?";

      script.src =
        `${SCHEDULE_FEED_URL}` +
        `${separator}action=auditManager` +
        `&callback=${callbackName}` +
        `&_=${Date.now()}`;

      script.onerror =
        function() {
          delete window[callbackName];

          if (
            restoreAuditLogFromSnapshot(
              "Could not load the audit log from Apps Script."
            )
          ) {
            return;
          }

          auditTableBody.innerHTML = `
            <tr>
              <td
                colspan="7"
                class="manager-empty"
              >
                Could not load the audit log from Apps Script.
              </td>
            </tr>
          `;
        };

      document.head.appendChild(
        script
      );
    }


    function renderAuditLog() {
      const actionFilter =
        auditActionFilter.value;

      const statusFilter =
        auditStatusFilter.value;

      const destinationFilter =
        auditDestinationFilter.value;

      const filtered =
        auditEntries.filter(item => {
          const actionMatches =
            actionFilter === "all" ||
            item.action ===
              actionFilter;

          const statusMatches =
            statusFilter === "all" ||
            item.status ===
              statusFilter;

          const destinationMatches =
            destinationFilter === "all" ||
            item.destination ===
              destinationFilter;

          return (
            actionMatches &&
            statusMatches &&
            destinationMatches
          );
        });

      auditTotalCount.textContent =
        String(
          auditEntries.length
        );

      auditSuccessCount.textContent =
        String(
          auditEntries.filter(
            item =>
              item.status === "success"
          ).length
        );

      auditErrorCount.textContent =
        String(
          auditEntries.filter(
            item =>
              item.status === "error"
          ).length
        );

      auditLatestTime.textContent =
        auditEntries.length > 0
          ? auditEntries[0].timestampDisplay
          : "—";

      if (filtered.length === 0) {
        auditTableBody.innerHTML = `
          <tr>
            <td
              colspan="7"
              class="manager-empty"
            >
              No audit entries match these filters.
            </td>
          </tr>
        `;

        return;
      }

      auditTableBody.innerHTML =
        filtered
          .map((item, index) => `
            <tr>
              <td>
                ${index + 1}
              </td>

              <td>
                ${escapeHtml(item.timestampDisplay)}
              </td>

              <td>
                <span class="audit-action">
                  ${escapeHtml(
                    getAuditActionLabel(
                      item.action
                    )
                  )}
                </span>
              </td>

              <td>
                <span
                  class="audit-status audit-status-${escapeHtml(item.status)}"
                >
                  ${escapeHtml(item.status)}
                </span>
              </td>

              <td>
                ${escapeHtml(item.destination || "—")}
              </td>

              <td>
                ${escapeHtml(item.rows)}
              </td>

              <td class="audit-details">
                ${escapeHtml(item.details || "—")}
              </td>
            </tr>
          `)
          .join("");
    }


    function getAuditActionLabel(
      action
    ) {
      if (action === "saveSchedule") {
        return "Schedule save";
      }

      if (
        action ===
        "saveHolidayOverrides"
      ) {
        return "Holiday save";
      }

      if (action === "restoreBackup") {
        return "Restore";
      }

      return action || "Unknown";
    }

    /*
     * =====================================================
     * HOLIDAY CALENDAR — READ ONLY
     * =====================================================
     */

    function setupHolidayCalendar() {
      previousCalendarMonthButton.addEventListener(
        "click",
        function() {
          calendarCursor.setMonth(
            calendarCursor.getMonth() - 1
          );

          selectedCalendarDate =
            null;

          closeCalendarDetails();
          renderHolidayCalendar();
        }
      );

      nextCalendarMonthButton.addEventListener(
        "click",
        function() {
          calendarCursor.setMonth(
            calendarCursor.getMonth() + 1
          );

          selectedCalendarDate =
            null;

          closeCalendarDetails();
          renderHolidayCalendar();
        }
      );

      todayCalendarButton.addEventListener(
        "click",
        function() {
          calendarCursor =
            new Date();

          selectedCalendarDate =
            formatDateForInput(
              new Date()
            );

          renderHolidayCalendar();
          openCalendarDetails(
            selectedCalendarDate
          );
        }
      );

      reloadCalendarButton.addEventListener(
        "click",
        function() {
          loadHolidayOverrides();

          setTimeout(
            renderHolidayCalendar,
            500
          );
        }
      );

      holidayCalendarGrid.addEventListener(
        "click",
        function(event) {
          const day =
            event.target.closest(
              "[data-calendar-date]"
            );

          if (!day) {
            return;
          }

          selectedCalendarDate =
            day.dataset.calendarDate;

          renderHolidayCalendar();

          openCalendarDetails(
            selectedCalendarDate
          );
        }
      );

      closeCalendarDetailsButton.addEventListener(
        "click",
        closeCalendarDetails
      );

      createHolidayForDateButton.addEventListener(
        "click",
        createHolidayOverrideFromCalendar
      );

      editHolidayForDateButton.addEventListener(
        "click",
        editHolidayOverridesFromCalendar
      );
    }


    function renderHolidayCalendar() {
      const year =
        calendarCursor.getFullYear();

      const month =
        calendarCursor.getMonth();

      calendarMonthLabel.textContent =
        calendarCursor.toLocaleDateString(
          [],
          {
            month: "long",
            year: "numeric"
          }
        );

      const firstDay =
        new Date(
          year,
          month,
          1
        );

      const startDate =
        new Date(firstDay);

      startDate.setDate(
        startDate.getDate() -
        startDate.getDay()
      );

      const weekdays = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ];

      let html =
        weekdays
          .map(day => `
            <div class="calendar-weekday">
              ${day}
            </div>
          `)
          .join("");

      const today =
        formatDateForInput(
          new Date()
        );

      for (
        let index = 0;
        index < 42;
        index += 1
      ) {
        const date =
          new Date(startDate);

        date.setDate(
          startDate.getDate() +
          index
        );

        const dateText =
          formatDateForInput(date);

        const events =
          getHolidayEventsForDate(
            dateText
          );

        const outsideMonth =
          date.getMonth() !==
          month;

        const isToday =
          dateText === today;

        const isSelected =
          dateText ===
          selectedCalendarDate;

        html += `
          <div
            class="calendar-day
              ${outsideMonth ? "outside-month" : ""}
              ${isToday ? "today" : ""}
              ${isSelected ? "selected" : ""}
            "
            data-calendar-date="${dateText}"
          >
            <div class="calendar-day-number">
              <span>
                ${date.getDate()}
              </span>

              ${
                events.length > 0
                  ? `
                    <span class="calendar-entry-count">
                      ${events.length}
                    </span>
                  `
                  : ""
              }
            </div>

            <div class="calendar-events">
              ${events
                .slice(0, 3)
                .map(item => `
                  <div
                    class="calendar-event calendar-event-${escapeHtml(item.status)}"
                    title="${escapeHtml(item.screen)} · ${escapeHtml(item.startTime)} · ${escapeHtml(item.image)}"
                  >
                    ${escapeHtml(item.screen)}
                    ·
                    ${escapeHtml(item.startTime)}
                  </div>
                `)
                .join("")}

              ${
                events.length > 3
                  ? `
                    <div class="calendar-more">
                      +${events.length - 3} more
                    </div>
                  `
                  : ""
              }
            </div>
          </div>
        `;
      }

      holidayCalendarGrid.innerHTML =
        html;
    }


    function getHolidayEventsForDate(
      dateText
    ) {
      return holidayOverrides
        .filter(item => {
          if (
            item.status === "invalid" ||
            !item.startDate ||
            !item.endDate
          ) {
            return false;
          }

          return (
            dateText >= item.startDate &&
            dateText <= item.endDate
          );
        })
        .map(item => ({
          ...item,
          status:
            getCalendarEventStatus(
              item,
              dateText
            )
        }))
        .sort((a, b) =>
          String(a.startTime)
            .localeCompare(
              String(b.startTime)
            )
        );
    }


    function getCalendarEventStatus(
      item,
      dateText
    ) {
      const today =
        formatDateForInput(
          new Date()
        );

      if (dateText < today) {
        return "expired";
      }

      if (dateText > today) {
        return "upcoming";
      }

      return getHolidayRowStatus(
        item
      );
    }


    function openCalendarDetails(
      dateText
    ) {
      const events =
        getHolidayEventsForDate(
          dateText
        );

      calendarDetailsTitle.textContent =
        new Date(
          `${dateText}T12:00:00`
        ).toLocaleDateString(
          [],
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }
        );

      if (events.length === 0) {
        calendarDetailsList.innerHTML = `
          <div class="calendar-details-item">
            No Holiday Overrides are active on this date.
          </div>
        `;

      } else {
        calendarDetailsList.innerHTML =
          events
            .map(item => `
              <div class="calendar-details-item">
                <div class="calendar-details-title">
                  ${escapeHtml(item.screen)}
                  ·
                  ${escapeHtml(item.startTime)}
                </div>

                <div class="calendar-details-meta">
                  ${escapeHtml(item.startDate)}
                  →
                  ${escapeHtml(item.endDate)}
                  <br>
                  ${escapeHtml(item.image)}
                  ·
                  ${escapeHtml(item.fade)} ms
                </div>
              </div>
            `)
            .join("");
      }

      calendarDetails.classList.remove(
        "hidden"
      );
    }


    function createHolidayOverrideFromCalendar() {
      if (!selectedCalendarDate) {
        return;
      }

      if (!holidayDraft) {
        holidayDraft =
          cloneHolidayRows(
            holidayOverrides
          );
      }

      holidayDraft.push({
        screen:
          SCREEN_NAMES[0] || "All",

        startDate:
          selectedCalendarDate,

        endDate:
          selectedCalendarDate,

        startTime:
          "12:00",

        image:
          "",

        fade:
          1500
      });

      persistHolidayDraft(
        holidayDraft
      );

      holidayEditingEnabled =
        true;

      holidayScreenFilter.value =
        "all";

      holidayStatusFilter.value =
        "all";

      updateHolidayEditingControls();

      openWorkspace(
        "holiday"
      );

      renderHolidayOverrides();

      setTimeout(
        function() {
          const rows =
            holidayTableBody.querySelectorAll(
              "tr"
            );

          const lastRow =
            rows[
              rows.length - 1
            ];

          if (lastRow) {
            lastRow.scrollIntoView({
              behavior:
                "smooth",

              block:
                "center"
            });

            const firstInput =
              lastRow.querySelector(
                "[data-holiday-field]"
              );

            if (firstInput) {
              firstInput.focus();
            }
          }
        },
        100
      );
    }


    function editHolidayOverridesFromCalendar() {
      if (!selectedCalendarDate) {
        return;
      }

      if (!holidayDraft) {
        holidayDraft =
          cloneHolidayRows(
            holidayOverrides
          );
      }

      holidayEditingEnabled =
        true;

      holidayScreenFilter.value =
        "all";

      holidayStatusFilter.value =
        "all";

      updateHolidayEditingControls();

      openWorkspace(
        "holiday"
      );

      renderHolidayOverrides();

      setTimeout(
        function() {
          const rows =
            Array.from(
              holidayTableBody.querySelectorAll(
                "tr"
              )
            );

          const targetIndex =
            holidayDraft.findIndex(
              item =>
                item.startDate &&
                item.endDate &&
                selectedCalendarDate >=
                  item.startDate &&
                selectedCalendarDate <=
                  item.endDate
            );

          if (
            targetIndex < 0 ||
            !rows[targetIndex]
          ) {
            return;
          }

          const targetRow =
            rows[targetIndex];

          targetRow.classList.add(
            "active-selection"
          );

          targetRow.scrollIntoView({
            behavior:
              "smooth",

            block:
              "center"
          });

          const firstInput =
            targetRow.querySelector(
              "[data-holiday-field]"
            );

          if (firstInput) {
            firstInput.focus();
          }
        },
        100
      );
    }


    function closeCalendarDetails() {
      calendarDetails.classList.add(
        "hidden"
      );

      calendarDetailsTitle.textContent =
        "—";

      calendarDetailsList.innerHTML =
        "";
    }

    /*
     * =====================================================
     * V3.1 COMPATIBILITY AUDIT
     * =====================================================
     */

    function setupCompatibilityAudit() {
      runCompatibilityAuditButton.addEventListener(
        "click",
        runCompatibilityAudit
      );
    }


    function runCompatibilityAudit() {
      const checks = [];

      addScheduleFeedChecks(
        checks
      );

      addEndTimeSafetyChecks(
        checks
      );

      addBackupCompatibilityChecks(
        checks
      );

      addDraftCompatibilityChecks(
        checks
      );

      addRepositoryCompatibilityChecks(
        checks
      );

      addHolidayCompatibilityChecks(
        checks
      );

      renderCompatibilityAudit(
        checks
      );
    }


    function addScheduleFeedChecks(
      checks
    ) {
      const loadedStates =
        Array.from(
          screenStates.values()
        );

      const errorStates =
        loadedStates.filter(
          state =>
            state.error
        );

      if (
        loadedStates.length ===
        SCREEN_NAMES.length &&
        errorStates.length === 0
      ) {
        checks.push({
          level:
            "ok",

          title:
            "All regular schedule feeds loaded",

          details:
            `${loadedStates.length} of ${SCREEN_NAMES.length} configured screen feeds are available.`
        });

      } else {
        checks.push({
          level:
            "error",

          title:
            "One or more schedule feeds are unavailable",

          details:
            `${errorStates.length} screen feed(s) currently report an error.`
        });
      }

      const missingEndTimeProperty =
        loadedStates.filter(
          state =>
            !state.error &&
            Array.isArray(
              state.schedule
            ) &&
            state.schedule.some(
              item =>
                !Object.prototype
                  .hasOwnProperty
                  .call(
                    item,
                    "endTime"
                  )
            )
        );

      if (
        missingEndTimeProperty.length === 0
      ) {
        checks.push({
          level:
            "ok",

          title:
            "Schedule feed supports End Time",

          details:
            "Every loaded regular schedule row contains the V3.1 endTime property, including blank values."
        });

      } else {
        checks.push({
          level:
            "warning",

          title:
            "Some schedule rows use the older feed format",

          details:
            `${missingEndTimeProperty.length} screen(s) contain rows without the endTime property. Redeploy the V3.1 Signage.gs backend if this persists.`
        });
      }
    }


    function addEndTimeSafetyChecks(
      checks
    ) {
      const allRows = [];

      screenStates.forEach(
        state => {
          if (
            !state.error &&
            Array.isArray(
              state.schedule
            )
          ) {
            state.schedule.forEach(
              item =>
                allRows.push({
                  ...item,
                  screen:
                    state.screenName
                })
            );
          }
        }
      );

      const invalidEndTimes =
        allRows.filter(
          item =>
            item.endTime &&
            (
              !/^([01]\d|2[0-3]):[0-5]\d$/
                .test(item.endTime) ||
              item.endTime <=
                item.time
            )
        );

      if (
        invalidEndTimes.length === 0
      ) {
        checks.push({
          level:
            "ok",

          title:
            "End Time values are valid",

          details:
            "No invalid or overnight End Time values were detected."
        });

      } else {
        checks.push({
          level:
            "error",

          title:
            "Invalid End Time values detected",

          details:
            `${invalidEndTimes.length} row(s) contain an invalid End Time.`
        });
      }

      const screensWithoutPersistent =
        SCREEN_NAMES.filter(
          screenName => {
            const state =
              screenStates.get(
                screenName
              );

            return (
              state &&
              !state.error &&
              Array.isArray(
                state.schedule
              ) &&
              state.schedule.length > 0 &&
              state.schedule.every(
                item =>
                  Boolean(
                    item.endTime
                  )
              )
            );
          }
        );

      if (
        screensWithoutPersistent.length === 0
      ) {
        checks.push({
          level:
            "ok",

          title:
            "Fallback rows available",

          details:
            "Every loaded regular schedule has at least one permanent fallback row with a blank End Time."
        });

      } else {
        checks.push({
          level:
            "warning",

          title:
            "Some screens have no fallback row",

          details:
            screensWithoutPersistent
              .map(
                screenName =>
                  `${screenName}: every row has an End Time`
              )
              .join(
                " · "
              )
        });
      }
    }


    function addBackupCompatibilityChecks(
      checks
    ) {
      if (
        backupHistory.length === 0
      ) {
        checks.push({
          level:
            "info",

          title:
            "Backup history has not been loaded",

          details:
            "Open Backup History or reload it before relying on the compatibility audit for old backup records."
        });

        return;
      }

      let olderRegularBackups =
        0;

      let invalidBackupJson =
        0;

      backupHistory.forEach(
        backup => {
          if (
            backup.type !== "regular"
          ) {
            return;
          }

          try {
            const rows =
              JSON.parse(
                backup.scheduleJson
              );

            if (
              Array.isArray(rows) &&
              rows.some(
                row =>
                  !Object.prototype
                    .hasOwnProperty
                    .call(
                      row,
                      "endTime"
                    )
              )
            ) {
              olderRegularBackups += 1;
            }

          } catch (error) {
            invalidBackupJson += 1;
          }
        }
      );

      if (
        invalidBackupJson > 0
      ) {
        checks.push({
          level:
            "error",

          title:
            "Invalid backup JSON detected",

          details:
            `${invalidBackupJson} regular backup record(s) could not be parsed.`
        });

      } else {
        checks.push({
          level:
            "ok",

          title:
            "Backup JSON is readable",

          details:
            "All loaded regular backup records can be parsed."
        });
      }

      if (
        olderRegularBackups > 0
      ) {
        checks.push({
          level:
            "info",

          title:
            "Older backups without End Time found",

          details:
            `${olderRegularBackups} backup(s) predate V3.1. They remain compatible and will be interpreted with a blank End Time.`
        });

      } else {
        checks.push({
          level:
            "ok",

          title:
            "Loaded backups use the V3.1 format",

          details:
            "No older regular backup records were detected."
        });
      }
    }


    function addDraftCompatibilityChecks(
      checks
    ) {
      let olderDraftCount =
        0;

      SCREEN_NAMES.forEach(
        screenName => {
          const stored =
            readStoredScheduleDraft(
              screenName
            );

          if (
            stored &&
            stored.rows.some(
              item =>
                !Object.prototype
                  .hasOwnProperty
                  .call(
                    item,
                    "endTime"
                  )
            )
          ) {
            olderDraftCount += 1;
          }
        }
      );

      if (
        olderDraftCount > 0
      ) {
        checks.push({
          level:
            "info",

          title:
            "Older local drafts detected",

          details:
            `${olderDraftCount} local draft(s) predate End Time support. They will be normalized to a blank End Time when restored.`
        });

      } else {
        checks.push({
          level:
            "ok",

          title:
            "Local drafts are V3.1 compatible",

          details:
            "No older schedule drafts were detected."
        });
      }
    }


    function addRepositoryCompatibilityChecks(
      checks
    ) {
      if (
        !imageHealthScanned ||
        repositoryImages.length === 0
      ) {
        checks.push({
          level:
            "warning",

          title:
            "GitHub repository has not been scanned",

          details:
            "Filename capitalization and missing-image checks are not currently available."
        });

        return;
      }

      if (
        missingReferencedImages.size === 0
      ) {
        checks.push({
          level:
            "ok",

          title:
            "All referenced images exist in GitHub",

          details:
            `${repositoryImages.length} repository image(s) were scanned.`
        });

      } else {
        checks.push({
          level:
            "error",

          title:
            "Missing GitHub image references detected",

          details:
            `${missingReferencedImages.size} referenced filename(s) were not found.`
        });
      }
    }


    function addHolidayCompatibilityChecks(
      checks
    ) {
      const invalidRows =
        holidayOverrides.filter(
          item =>
            item.status ===
            "invalid"
        );

      if (
        invalidRows.length === 0
      ) {
        checks.push({
          level:
            "ok",

          title:
            "Holiday Overrides are valid",

          details:
            `${holidayOverrides.length} override row(s) are currently loaded.`
        });

      } else {
        checks.push({
          level:
            "error",

          title:
            "Invalid Holiday Override rows detected",

          details:
            `${invalidRows.length} row(s) need attention.`
        });
      }
    }


    function renderCompatibilityAudit(
      checks
    ) {
      const passCount =
        checks.filter(
          check =>
            check.level === "ok"
        ).length;

      const warningCount =
        checks.filter(
          check =>
            check.level === "warning" ||
            check.level === "info"
        ).length;

      const errorCount =
        checks.filter(
          check =>
            check.level === "error"
        ).length;

      compatibilityPassCount.textContent =
        String(passCount);

      compatibilityWarningCount.textContent =
        String(warningCount);

      compatibilityErrorCount.textContent =
        String(errorCount);

      compatibilityOverallState.textContent =
        errorCount > 0
          ? "Needs attention"
          : warningCount > 0
            ? "Ready with notes"
            : "Ready";

      compatibilityAuditStatus.textContent =
        `Audit completed at ${new Date().toLocaleTimeString()}.`;

      compatibilityAuditList.innerHTML =
        checks
          .map(check => `
            <div class="compatibility-item compatibility-${escapeHtml(check.level)}">
              <strong>
                ${escapeHtml(check.title)}
              </strong>

              ${escapeHtml(check.details)}
            </div>
          `)
          .join("");
    }

    /*
     * =====================================================
     * REUSABLE SCHEDULE TEMPLATES
     * =====================================================
     */

    function initializeScheduleTemplates() {
      scheduleTemplates =
        readScheduleTemplates();

      renderScheduleTemplates();
    }


    function readScheduleTemplates() {
      try {
        const raw =
          localStorage.getItem(
            SCHEDULE_TEMPLATE_STORAGE_KEY
          );

        if (!raw) {
          return [];
        }

        const parsed =
          JSON.parse(raw);

        return Array.isArray(parsed)
          ? parsed.filter(
              item =>
                item &&
                typeof item.name === "string" &&
                Array.isArray(item.rows)
            )
          : [];

      } catch (error) {
        return [];
      }
    }


    function persistScheduleTemplates() {
      try {
        localStorage.setItem(
          SCHEDULE_TEMPLATE_STORAGE_KEY,
          JSON.stringify(
            scheduleTemplates
          )
        );
      } catch (error) {
        showManagerSaveMessage(
          "The browser could not store the schedule template.",
          "error"
        );
      }
    }


    function saveCurrentScheduleAsTemplate() {
      const screenName =
        managerScreenSelect.value;

      const state =
        screenStates.get(
          screenName
        );

      if (
        !state ||
        state.error ||
        !Array.isArray(
          state.schedule
        )
      ) {
        showManagerSaveMessage(
          "The selected schedule is not available.",
          "error"
        );

        return;
      }

      const name =
        String(
          scheduleTemplateNameInput.value || ""
        ).trim();

      if (!name) {
        showManagerSaveMessage(
          "Enter a template name first.",
          "error"
        );

        scheduleTemplateNameInput.focus();
        return;
      }

      const rows =
        (
          managerDrafts.get(
            screenName
          ) ||
          state.schedule
        )
          .map(item => ({
            time:
              String(item.time || ""),

            endTime:
              String(item.endTime || ""),

            image:
              String(item.image || ""),

            fade:
              Number(item.fade) || 1500
          }));

      const existingIndex =
        scheduleTemplates.findIndex(
          template =>
            template.name.toLowerCase() ===
            name.toLowerCase()
        );

      const template = {
        id:
          existingIndex >= 0
            ? scheduleTemplates[
                existingIndex
              ].id
            : createSaveRequestId(),

        name:
          name,

        sourceScreen:
          screenName,

        savedAt:
          new Date()
            .toISOString(),

        rows:
          rows
      };

      if (existingIndex >= 0) {
        const overwrite =
          window.confirm(
            `Replace the existing template "${scheduleTemplates[existingIndex].name}"?`
          );

        if (!overwrite) {
          return;
        }

        scheduleTemplates[
          existingIndex
        ] = template;

      } else {
        scheduleTemplates.push(
          template
        );
      }

      scheduleTemplates.sort(
        (a, b) =>
          a.name.localeCompare(
            b.name
          )
      );

      persistScheduleTemplates();
      renderScheduleTemplates();

      scheduleTemplateNameInput.value =
        "";

      showManagerSaveMessage(
        `Template "${name}" saved locally.`,
        "success"
      );
    }


    function renderScheduleTemplates() {
      if (!scheduleTemplateList) {
        return;
      }

      if (
        scheduleTemplates.length === 0
      ) {
        scheduleTemplateList.innerHTML = `
          <div class="manager-empty">
            No local schedule templates have been saved.
          </div>
        `;

        return;
      }

      scheduleTemplateList.innerHTML =
        scheduleTemplates
          .map(template => {
            const savedAt =
              template.savedAt
                ? new Date(
                    template.savedAt
                  ).toLocaleString()
                : "Unknown time";

            return `
              <article class="template-item">
                <div class="template-item-main">
                  <div class="template-item-name">
                    ${escapeHtml(template.name)}
                  </div>

                  <div class="template-item-meta">
                    ${template.rows.length}
                    row${template.rows.length === 1 ? "" : "s"}
                    · Source:
                    ${escapeHtml(template.sourceScreen || "Unknown")}
                    · Saved:
                    ${escapeHtml(savedAt)}
                  </div>
                </div>

                <div class="template-item-actions">
                  <button
                    class="button"
                    type="button"
                    data-template-action="preview"
                    data-template-id="${escapeHtml(template.id)}"
                  >
                    Preview
                  </button>

                  <button
                    class="button button-primary"
                    type="button"
                    data-template-action="apply"
                    data-template-id="${escapeHtml(template.id)}"
                  >
                    Apply to selected screen
                  </button>

                  <button
                    class="button"
                    type="button"
                    data-template-action="delete"
                    data-template-id="${escapeHtml(template.id)}"
                  >
                    Delete
                  </button>
                </div>
              </article>
            `;
          })
          .join("");
    }


    function handleScheduleTemplateAction(
      event
    ) {
      const button =
        event.target.closest(
          "[data-template-action]"
        );

      if (!button) {
        return;
      }

      const template =
        scheduleTemplates.find(
          item =>
            item.id ===
            button.dataset.templateId
        );

      if (!template) {
        return;
      }

      const action =
        button.dataset.templateAction;

      if (action === "preview") {
        openScheduleTemplatePreview(
          template
        );

        return;
      }

      if (action === "apply") {
        applyScheduleTemplate(
          template
        );

        return;
      }

      if (action === "delete") {
        deleteScheduleTemplate(
          template
        );
      }
    }


    function openScheduleTemplatePreview(
      template
    ) {
      scheduleTemplatePreviewTitle.textContent =
        template.name;

      scheduleTemplatePreviewJson.textContent =
        JSON.stringify(
          template.rows,
          null,
          2
        );

      scheduleTemplatePreview.classList.add(
        "visible"
      );

      scheduleTemplatePreview.scrollIntoView({
        behavior:
          "smooth",

        block:
          "nearest"
      });
    }


    function closeScheduleTemplatePreview() {
      scheduleTemplatePreview.classList.remove(
        "visible"
      );

      scheduleTemplatePreviewTitle.textContent =
        "—";

      scheduleTemplatePreviewJson.textContent =
        "";
    }


    function applyScheduleTemplate(
      template
    ) {
      const screenName =
        managerScreenSelect.value;

      const confirmed =
        window.confirm(
          `Apply template "${template.name}" to "${screenName}"?\n\n` +
          `This creates an unsaved local draft with ${template.rows.length} row(s).`
        );

      if (!confirmed) {
        return;
      }

      const rows =
        template.rows.map(
          item => ({
            time:
              String(item.time || ""),

            endTime:
              String(item.endTime || ""),

            image:
              String(item.image || ""),

            fade:
              Number(item.fade) || 1500
          })
        );

      managerDrafts.set(
        screenName,
        rows
      );

      managerEditingEnabled =
        true;

      persistScheduleDraft(
        screenName,
        rows
      );

      updateManagerEditingControls();
      updateScheduleDraftRecoveryBanner();
      updateScheduleManager();

      showManagerSaveMessage(
        `Template "${template.name}" applied as an unsaved draft.`,
        "success"
      );
    }


    function deleteScheduleTemplate(
      template
    ) {
      const confirmed =
        window.confirm(
          `Delete the local template "${template.name}"?`
        );

      if (!confirmed) {
        return;
      }

      scheduleTemplates =
        scheduleTemplates.filter(
          item =>
            item.id !==
            template.id
        );

      persistScheduleTemplates();
      renderScheduleTemplates();
      closeScheduleTemplatePreview();
    }

    /*
     * =====================================================
     * DAILY SCHEDULE CALENDAR — READ ONLY
     * =====================================================
     */

    function setupDailyScheduleCalendar() {
      dailyCalendarNowButton.addEventListener(
        "click",
        function() {
          renderDailyScheduleCalendar();

          setTimeout(
            scrollDailyCalendarToNow,
            50
          );
        }
      );

      dailyCalendarReloadButton.addEventListener(
        "click",
        function() {
          refreshDashboard();

          setTimeout(
            renderDailyScheduleCalendar,
            700
          );
        }
      );

      dailyCalendarStartHour.addEventListener(
        "change",
        renderDailyScheduleCalendar
      );

      dailyCalendarGrid.addEventListener(
        "click",
        function(event) {
          const resizeHandle =
            event.target.closest(
              "[data-daily-resize-handle]"
            );

          if (resizeHandle) {
            return;
          }

          const block =
            event.target.closest(
              "[data-daily-calendar-block]"
            );

          if (!block) {
            return;
          }

          jumpFromDailyCalendarToScheduleRow(
            block.dataset.screen,
            Number(
              block.dataset.rowIndex
            )
          );
        }
      );

      dailyCalendarGrid.addEventListener(
        "dblclick",
        function(event) {
          if (
            event.target.closest(
              "[data-daily-calendar-block]"
            )
          ) {
            return;
          }

          const cell =
            event.target.closest(
              ".daily-calendar-cell"
            );

          if (!cell) {
            return;
          }

          createScheduleRowFromCalendarCell(
            cell
          );
        }
      );

      dailyCalendarGrid.addEventListener(
        "mouseover",
        function(event) {
          const block =
            event.target.closest(
              "[data-daily-calendar-block]"
            );

          if (!block) {
            return;
          }

          showDailyCalendarHoverPreview(
            block,
            event
          );
        }
      );

      dailyCalendarGrid.addEventListener(
        "mousemove",
        function(event) {
          if (
            dailyCalendarHoverPreview.classList.contains(
              "visible"
            )
          ) {
            positionDailyCalendarHoverPreview(
              event
            );
          }
        }
      );

      dailyCalendarGrid.addEventListener(
        "mouseout",
        function(event) {
          const block =
            event.target.closest(
              "[data-daily-calendar-block]"
            );

          if (!block) {
            return;
          }

          if (
            block.contains(
              event.relatedTarget
            )
          ) {
            return;
          }

          hideDailyCalendarHoverPreview();
        }
      );

      dailyCalendarGrid.addEventListener(
        "mousedown",
        function(event) {
          const handle =
            event.target.closest(
              "[data-daily-resize-handle]"
            );

          if (!handle) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          beginDailyCalendarResize(
            handle,
            event
          );
        }
      );

      document.addEventListener(
        "mousemove",
        handleDailyCalendarResize
      );

      document.addEventListener(
        "mouseup",
        finishDailyCalendarResize
      );

      closeDailyCalendarDetailsButton.addEventListener(
        "click",
        closeDailyCalendarDetails
      );

      let dailyCalendarResizeFrame =
        null;

      window.addEventListener(
        "resize",
        function() {
          if (
            !dailyScheduleCalendarWorkspace.classList.contains(
              "active"
            )
          ) {
            return;
          }

          if (dailyCalendarResizeFrame) {
            cancelAnimationFrame(
              dailyCalendarResizeFrame
            );
          }

          dailyCalendarResizeFrame =
            requestAnimationFrame(
              function() {
                dailyCalendarResizeFrame =
                  null;

                renderDailyScheduleCalendar();
              }
            );
        }
      );
    }


    function renderDailyScheduleCalendar() {
      const startHour =
        Number(
          dailyCalendarStartHour.value
        );

      const startMinute =
        startHour * 60;

      const endMinute =
        24 * 60;

      const totalMinutes =
        endMinute -
        startMinute;

      const rowHeight =
        48;

      const timeColumnWidth =
        76;

      /*
       * The calendar has one fixed time column and six equal
       * screen columns. Calculate the exact pixel width after
       * the grid has rendered.
       */
      const calendarWidth =
        dailyCalendarGrid.clientWidth ||
        1100;

      const screenColumnWidth =
        (
          calendarWidth -
          timeColumnWidth
        ) /
        SCREEN_NAMES.length;

      const hourCount =
        Math.ceil(
          totalMinutes / 60
        );

      dailyCalendarGrid.style.gridTemplateRows =
        `48px repeat(${hourCount}, ${rowHeight}px)`;

      let html =
        `<div class="daily-calendar-corner">Time</div>`;

      SCREEN_NAMES.forEach(
        screenName => {
          html += `
            <div class="daily-calendar-screen-header">
              ${escapeHtml(screenName)}
            </div>
          `;
        }
      );

      for (
        let hour = startHour;
        hour < 24;
        hour += 1
      ) {
        html += `
          <div class="daily-calendar-time-label">
            ${String(hour).padStart(2, "0")}:00
          </div>
        `;

        SCREEN_NAMES.forEach(
          screenName => {
            html += `
              <div
                class="daily-calendar-cell"
                data-daily-cell-screen="${escapeHtml(screenName)}"
                data-daily-cell-hour="${hour}"
              ></div>
            `;
          }
        );
      }

      dailyCalendarGrid.innerHTML =
        html;

      SCREEN_NAMES.forEach(
        (screenName, screenIndex) => {
          const state =
            screenStates.get(
              screenName
            );

          if (
            !state ||
            state.error ||
            !Array.isArray(
              state.schedule
            )
          ) {
            return;
          }

          const calendarSchedule =
            managerDrafts.get(
              screenName
            ) ||
            state.schedule;

          const segments =
            buildDailyCalendarSegments(
              calendarSchedule
            );

          segments.forEach(
            segment => {
              const segmentStart =
                Math.max(
                  timeToMinutes(
                    segment.start
                  ),
                  startMinute
                );

              const segmentEnd =
                Math.min(
                  segment.end === "24:00"
                    ? 1440
                    : timeToMinutes(
                        segment.end
                      ),
                  endMinute
                );

              if (
                segmentEnd <=
                segmentStart
              ) {
                return;
              }

              const top =
                48 +
                (
                  (
                    segmentStart -
                    startMinute
                  ) /
                  60
                ) *
                rowHeight;

              const height =
                Math.max(
                  8,
                  (
                    (
                      segmentEnd -
                      segmentStart
                    ) /
                    60
                  ) *
                  rowHeight -
                  4
                );

              const horizontalGap =
                6;

              const blockLeft =
                timeColumnWidth +
                screenIndex *
                  screenColumnWidth +
                horizontalGap;

              const blockWidth =
                Math.max(
                  20,
                  screenColumnWidth -
                  horizontalGap * 2
                );

              const block =
                document.createElement(
                  "div"
                );

              block.className =
                `daily-calendar-block ${segment.type}` +
                (
                  segment.overlap
                    ? " overlap"
                    : ""
                );

              if (height < 34) {
                block.classList.add(
                  "compact"
                );
              }

              if (height < 18) {
                block.classList.add(
                  "very-compact"
                );
              }

              block.style.left =
                `${blockLeft}px`;

              block.style.width =
                `${blockWidth}px`;

              block.style.top =
                `${top}px`;

              block.style.height =
                `${height}px`;

              block.dataset.dailyCalendarBlock =
                "1";

              block.dataset.screen =
                screenName;

              block.dataset.image =
                segment.image;

              block.dataset.start =
                segment.start;

              block.dataset.end =
                segment.end;

              block.dataset.type =
                segment.type;

              block.dataset.reason =
                segment.reason;

              block.dataset.rowIndex =
                String(segment.rowIndex);

              block.dataset.startMinute =
                String(segmentStart);

              block.dataset.endMinute =
                String(segmentEnd);

              block.dataset.startHour =
                String(startHour);

              block.dataset.rowHeight =
                String(rowHeight);

              block.innerHTML = `
                <div class="daily-calendar-block-title">
                  ${escapeHtml(segment.image)}
                </div>

                <div class="daily-calendar-block-meta">
                  ${escapeHtml(segment.start)}
                  →
                  ${escapeHtml(segment.end)}
                </div>

                ${
                  segment.type === "temporary"
                    ? `
                      <div
                        class="daily-calendar-resize-handle"
                        data-daily-resize-handle="1"
                      ></div>
                    `
                    : ""
                }
              `;

              dailyCalendarGrid.appendChild(
                block
              );
            }
          );
        }
      );

      addDailyCalendarNowLine(
        startMinute,
        endMinute,
        rowHeight
      );
    }


    function buildDailyCalendarSegments(
      schedule
    ) {
      const sorted =
        schedule
          .map(item => ({
            ...item,

            time:
              String(item.time || ""),

            endTime:
              String(
                item.endTime || ""
              )
          }))
          .sort((a, b) =>
            a.time.localeCompare(
              b.time
            )
          );

      const segments = [];

      sorted.forEach(
        (item, index) => {
          const next =
            sorted[index + 1];

          const originalRowIndex =
            schedule.findIndex(
              sourceItem =>
                sourceItem.time === item.time &&
                sourceItem.image === item.image &&
                String(sourceItem.endTime || "") ===
                  String(item.endTime || "")
            );

          const end =
            item.endTime ||
            (
              next
                ? next.time
                : "24:00"
            );

          const overlap =
            Boolean(
              next &&
              next.time <
                end
            );

          segments.push({
            image:
              item.image,

            start:
              item.time,

            end:
              end,

            type:
              item.endTime
                ? "temporary"
                : "persistent",

            overlap:
              overlap,

            reason:
              item.endTime
                ? `Temporary row active from ${item.time} until ${item.endTime}.`
                : `Persistent row active from ${item.time} until another row replaces it.`,

            rowIndex:
              originalRowIndex
          });

          if (
            item.endTime &&
            next &&
            item.endTime <
              next.time
          ) {
            const fallback =
              findPersistentFallbackAtTime(
                sorted,
                item.endTime
              );

            if (fallback) {
              segments.push({
                image:
                  fallback.image,

                start:
                  item.endTime,

                end:
                  next.time,

                type:
                  "fallback",

                overlap:
                  false,

                reason:
                  `No temporary row is active. The player falls back to ${fallback.image}.`,

                rowIndex:
                  schedule.findIndex(
                    sourceItem =>
                      sourceItem.time === fallback.time &&
                      sourceItem.image === fallback.image
                  )
              });
            }
          }
        }
      );

      return segments;
    }


    function addDailyCalendarNowLine(
      startMinute,
      endMinute,
      rowHeight
    ) {
      const now =
        new Date();

      const currentMinute =
        now.getHours() * 60 +
        now.getMinutes();

      if (
        currentMinute <
          startMinute ||
        currentMinute >
          endMinute
      ) {
        return;
      }

      const top =
        48 +
        (
          (
            currentMinute -
            startMinute
          ) /
          60
        ) *
        rowHeight;

      const line =
        document.createElement(
          "div"
        );

      line.className =
        "daily-calendar-now-line";

      line.style.top =
        `${top}px`;

      line.innerHTML = `
        <span class="daily-calendar-now-label">
          Now ${getCurrentHHMM(now)}
        </span>
      `;

      dailyCalendarGrid.appendChild(
        line
      );
    }


    function scrollDailyCalendarToNow() {
      const startHour =
        Number(
          dailyCalendarStartHour.value
        );

      const now =
        new Date();

      const currentMinute =
        now.getHours() * 60 +
        now.getMinutes();

      const startMinute =
        startHour * 60;

      const offset =
        Math.max(
          0,
          (
            (
              currentMinute -
              startMinute
            ) /
            60
          ) *
          48 -
          120
        );

      dailyCalendarWrap.scrollTop =
        offset;
    }


    function jumpFromDailyCalendarToScheduleRow(
      screenName,
      rowIndex
    ) {
      if (
        !screenName ||
        rowIndex < 0
      ) {
        return;
      }

      managerScreenSelect.value =
        screenName;

      const state =
        screenStates.get(
          screenName
        );

      if (
        !managerDrafts.has(
          screenName
        ) &&
        state &&
        Array.isArray(
          state.schedule
        )
      ) {
        managerDrafts.set(
          screenName,
          state.schedule.map(item => ({
            time:
              item.time,

            endTime:
              item.endTime || "",

            image:
              item.image,

            fade:
              item.fade
          }))
        );
      }

      managerEditingEnabled =
        true;

      updateManagerEditingControls();

      openWorkspace(
        "manager"
      );

      updateScheduleManager();

      setTimeout(
        function() {
          const row =
            managerScheduleBody.querySelector(
              `[data-row-index="${rowIndex}"]`
            )?.closest("tr");

          if (!row) {
            return;
          }

          row.scrollIntoView({
            behavior:
              "smooth",

            block:
              "center"
          });

          row.classList.add(
            "active-selection"
          );

          const input =
            row.querySelector(
              "[data-manager-field]"
            );

          if (input) {
            input.focus();
          }
        },
        120
      );
    }


    function createScheduleRowFromCalendarCell(
      cell
    ) {
      const screenName =
        cell.dataset.dailyCellScreen;

      const hour =
        Number(
          cell.dataset.dailyCellHour
        );

      if (
        !screenName ||
        !Number.isFinite(hour)
      ) {
        return;
      }

      managerScreenSelect.value =
        screenName;

      const state =
        screenStates.get(
          screenName
        );

      if (
        !state ||
        state.error ||
        !Array.isArray(
          state.schedule
        )
      ) {
        return;
      }

      const draft =
        managerDrafts.get(
          screenName
        ) ||
        state.schedule.map(item => ({
          time:
            item.time,

          endTime:
            item.endTime || "",

          image:
            item.image,

          fade:
            item.fade
        }));

      const time =
        `${String(hour).padStart(2, "0")}:00`;

      draft.push({
        time:
          time,

        endTime:
          "",

        image:
          "",

        fade:
          1500
      });

      draft.sort(
        (a, b) =>
          a.time.localeCompare(
            b.time
          )
      );

      managerDrafts.set(
        screenName,
        draft
      );

      persistScheduleDraft(
        screenName,
        draft
      );

      managerEditingEnabled =
        true;

      openWorkspace(
        "manager"
      );

      updateManagerEditingControls();
      updateScheduleManager();

      const newIndex =
        draft.findIndex(
          item =>
            item.time === time &&
            item.image === ""
        );

      setTimeout(
        function() {
          const input =
            managerScheduleBody.querySelector(
              `[data-manager-field="image"][data-row-index="${newIndex}"]`
            );

          if (input) {
            input.scrollIntoView({
              behavior:
                "smooth",

              block:
                "center"
            });

            input.focus();
          }
        },
        120
      );
    }


    function showDailyCalendarHoverPreview(
      block,
      event
    ) {
      dailyCalendarHoverPreviewImage.src =
        buildImageUrl(
          block.dataset.image
        );

      dailyCalendarHoverPreviewName.textContent =
        `${block.dataset.screen} · ${block.dataset.image}`;

      dailyCalendarHoverPreview.classList.add(
        "visible"
      );

      positionDailyCalendarHoverPreview(
        event
      );
    }


    function positionDailyCalendarHoverPreview(
      event
    ) {
      const gap =
        16;

      const previewWidth =
        276;

      const previewHeight =
        210;

      let left =
        event.clientX + gap;

      let top =
        event.clientY + gap;

      if (
        left + previewWidth >
        window.innerWidth
      ) {
        left =
          event.clientX -
          previewWidth -
          gap;
      }

      if (
        top + previewHeight >
        window.innerHeight
      ) {
        top =
          event.clientY -
          previewHeight -
          gap;
      }

      dailyCalendarHoverPreview.style.left =
        `${Math.max(8, left)}px`;

      dailyCalendarHoverPreview.style.top =
        `${Math.max(8, top)}px`;
    }


    function hideDailyCalendarHoverPreview() {
      dailyCalendarHoverPreview.classList.remove(
        "visible"
      );

      dailyCalendarHoverPreviewImage.removeAttribute(
        "src"
      );
    }


    function beginDailyCalendarResize(
      handle,
      event
    ) {
      const block =
        handle.closest(
          "[data-daily-calendar-block]"
        );

      if (
        !block ||
        block.dataset.type !==
          "temporary"
      ) {
        return;
      }

      dailyCalendarResizeState = {
        block:
          block,

        screen:
          block.dataset.screen,

        rowIndex:
          Number(
            block.dataset.rowIndex
          ),

        startMinute:
          Number(
            block.dataset.startMinute
          ),

        initialEndMinute:
          Number(
            block.dataset.endMinute
          ),

        initialY:
          event.clientY,

        rowHeight:
          Number(
            block.dataset.rowHeight
          )
      };

      hideDailyCalendarHoverPreview();
    }


    function handleDailyCalendarResize(
      event
    ) {
      if (!dailyCalendarResizeState) {
        return;
      }

      const state =
        dailyCalendarResizeState;

      const deltaMinutes =
        Math.round(
          (
            event.clientY -
            state.initialY
          ) /
          state.rowHeight *
          60 /
          5
        ) * 5;

      const endMinute =
        Math.max(
          state.startMinute + 5,
          Math.min(
            1435,
            state.initialEndMinute +
            deltaMinutes
          )
        );

      const height =
        Math.max(
          8,
          (
            (
              endMinute -
              state.startMinute
            ) /
            60
          ) *
          state.rowHeight -
          4
        );

      state.block.style.height =
        `${height}px`;

      state.block.classList.toggle(
        "compact",
        height < 34
      );

      state.block.classList.toggle(
        "very-compact",
        height < 18
      );

      state.block.dataset.pendingEndMinute =
        String(endMinute);

      const meta =
        state.block.querySelector(
          ".daily-calendar-block-meta"
        );

      if (meta) {
        meta.textContent =
          `${minutesToHHMM(state.startMinute)} → ${minutesToHHMM(endMinute)}`;
      }
    }


    function finishDailyCalendarResize() {
      if (!dailyCalendarResizeState) {
        return;
      }

      const state =
        dailyCalendarResizeState;

      const pendingEndMinute =
        Number(
          state.block.dataset.pendingEndMinute ||
          state.initialEndMinute
        );

      const screenState =
        screenStates.get(
          state.screen
        );

      if (
        screenState &&
        Array.isArray(
          screenState.schedule
        )
      ) {
        const draft =
          managerDrafts.get(
            state.screen
          ) ||
          screenState.schedule.map(item => ({
            time:
              item.time,

            endTime:
              item.endTime || "",

            image:
              item.image,

            fade:
              item.fade
          }));

        if (
          draft[state.rowIndex]
        ) {
          draft[state.rowIndex].endTime =
            minutesToHHMM(
              pendingEndMinute
            );

          managerDrafts.set(
            state.screen,
            draft
          );

          persistScheduleDraft(
            state.screen,
            draft
          );
        }
      }

      dailyCalendarResizeState =
        null;

      renderDailyScheduleCalendar();
    }


    function minutesToHHMM(
      totalMinutes
    ) {
      const safeMinutes =
        Math.max(
          0,
          Math.min(
            1439,
            Math.round(
              totalMinutes
            )
          )
        );

      const hours =
        Math.floor(
          safeMinutes / 60
        );

      const minutes =
        safeMinutes % 60;

      return (
        String(hours)
          .padStart(2, "0") +
        ":" +
        String(minutes)
          .padStart(2, "0")
      );
    }


    function openDailyCalendarDetails(
      item
    ) {
      dailyCalendarDetailsTitle.textContent =
        item.image;

      dailyCalendarDetailsScreen.textContent =
        item.screen;

      dailyCalendarDetailsStart.textContent =
        item.start;

      dailyCalendarDetailsEnd.textContent =
        item.end;

      dailyCalendarDetailsType.textContent =
        capitalizeDashboardText(
          item.type
        );

      dailyCalendarDetailsDescription.textContent =
        item.reason;

      dailyCalendarDetails.classList.remove(
        "hidden"
      );

      dailyCalendarDetails.scrollIntoView({
        behavior:
          "smooth",

        block:
          "nearest"
      });
    }


    function closeDailyCalendarDetails() {
      dailyCalendarDetails.classList.add(
        "hidden"
      );

      dailyCalendarDetailsTitle.textContent =
        "—";

      dailyCalendarDetailsScreen.textContent =
        "—";

      dailyCalendarDetailsStart.textContent =
        "—";

      dailyCalendarDetailsEnd.textContent =
        "—";

      dailyCalendarDetailsType.textContent =
        "—";

      dailyCalendarDetailsDescription.textContent =
        "";
    }


    /*
     * =====================================================
     * SYSTEM HEALTH
     * =====================================================
     */

    function setupSystemHealth() {
      refreshSystemHealthButton.addEventListener(
        "click",
        loadSystemHealth
      );

      runAutomaticHealthChecksButton.addEventListener(
        "click",
        runAutomaticHealthChecks
      );

      testHealthConnectionButton.addEventListener(
        "click",
        function() {
          runHealthAdminOperation("testConnection");
        }
      );

      clearHealthLastErrorButton.addEventListener(
        "click",
        function() {
          runHealthAdminOperation("clearLastError");
        }
      );

      resetHealthTelemetryButton.addEventListener(
        "click",
        function() {
          runHealthAdminOperation("resetTelemetry");
        }
      );

      clearHealthCacheButton.addEventListener(
        "click",
        function() {
          runHealthAdminOperation("clearScheduleCache");
        }
      );

      exportHealthTelemetryButton.addEventListener(
        "click",
        exportHealthTelemetry
      );

      refreshPlayerHeartbeatsButton.addEventListener(
        "click",
        loadPlayerHeartbeats
      );

      refreshGoLiveReadinessButton.addEventListener(
        "click",
        function() {
          refreshGoLiveReadinessButton.disabled =
            true;

          refreshGoLiveReadinessButton.textContent =
            "Checking…";

          try {
            runGoLiveReadinessCheck();
          } finally {
            refreshGoLiveReadinessButton.disabled =
              false;

            refreshGoLiveReadinessButton.textContent =
              "Run preflight";
          }
        }
      );

      refreshPlayerVersionsButton.addEventListener(
        "click",
        loadPlayerVersions
      );

      refreshRolloutAssistantButton.addEventListener(
        "click",
        refreshRolloutAssistant
      );

      resetRolloutProgressButton.addEventListener(
        "click",
        function() {
          if (
            !window.confirm(
              "Reset the rollout progress for every screen?"
            )
          ) {
            return;
          }

          rolloutProgress =
            {};

          persistRolloutProgress();
          renderRolloutAssistant();

          showRolloutMessage(
            "Rollout progress was reset.",
            "success"
          );
        }
      );

      expectedPlayerVersionLabel.textContent =
        EXPECTED_PLAYER_VERSION;
    }

    function loadSystemHealth() {
      refreshSystemHealthButton.disabled = true;
      refreshSystemHealthButton.textContent = "Loading…";
      healthLastUpdated.textContent = "Reading Apps Script telemetry…";
      healthErrorBox.className = "health-error-box";
      healthErrorBox.textContent = "";

      const callbackName = `systemHealthCallback_${Date.now()}`;
      const script = document.createElement("script");
      const separator = SCHEDULE_FEED_URL.includes("?") ? "&" : "?";

      window[callbackName] = function(payload) {
        try {
          if (!payload || payload.success !== true || !payload.telemetry) {
            if (
              payload &&
              payload.success === false &&
              /sheet.*Schedule|tab.*Schedule|Schedule.*not found/i.test(
                String(payload.error || "")
              )
            ) {
              throw new Error(
                "The deployed Apps Script is still using the older Signage.gs. " +
                "You do not need a Schedule tab. Replace Signage.gs with the " +
                "telemetry-enabled version and deploy a new Apps Script version."
              );
            }

            if (
              payload &&
              payload.success === true &&
              Array.isArray(payload.schedule) &&
              !payload.telemetry
            ) {
              throw new Error(
                "The deployed Apps Script does not recognize action=healthManager yet. " +
                "Replace Signage.gs with the telemetry-enabled version and redeploy."
              );
            }

            throw new Error(
              payload && payload.error
                ? payload.error
                : "System Health returned no telemetry."
            );
          }
          renderSystemHealth(payload.telemetry);
        } catch (error) {
          showSystemHealthError(error.message || "System Health could not be loaded.");
        } finally {
          cleanupSystemHealthRequest(callbackName, script);
        }
      };

      script.onerror = function() {
        showSystemHealthError("Could not connect to the Apps Script health endpoint.");
        cleanupSystemHealthRequest(callbackName, script);
      };

      script.src = `${SCHEDULE_FEED_URL}${separator}action=healthManager&callback=${encodeURIComponent(callbackName)}&_=${Date.now()}`;
      document.head.appendChild(script);

      setTimeout(function() {
        if (typeof window[callbackName] === "function") {
          showSystemHealthError("The Apps Script health request timed out.");
          cleanupSystemHealthRequest(callbackName, script);
        }
      }, 20000);
    }

    function cleanupSystemHealthRequest(callbackName, script) {
      if (script && script.remove) script.remove();
      try { delete window[callbackName]; } catch (error) { window[callbackName] = undefined; }
      refreshSystemHealthButton.disabled = false;
      refreshSystemHealthButton.textContent = "Refresh health";
    }

    function renderSystemHealth(telemetry) {
      latestHealthTelemetry =
        telemetry;

      const failures = Number(telemetry.failures || 0);
      const successRate = Number(telemetry.successRate || 0);
      const averageDuration = Number(telemetry.averageDurationMs || 0);

      const requestCount =
        Number(
          telemetry.requests || 0
        );

      const safeTelemetryForScore = {
        requestCount:
          requestCount,

        successRate:
          Number(
            telemetry.successRate || 0
          ),

        failures:
          Number(
            telemetry.failures || 0
          ),

        averageDuration:
          Number(
            telemetry.averageDurationMs || 0
          ),

        maxDuration:
          Number(
            telemetry.maxDurationMs || 0
          ),

        cacheHitRate:
          Number(
            telemetry.cacheHitRate || 0
          )
      };

      const cacheHitRate =
        Number(
          telemetry.cacheHitRate || 0
        );

      const maxDuration =
        Number(
          telemetry.maxDurationMs || 0
        );

      const scoreResult =
        calculateSystemHealthScore(
          safeTelemetryForScore
        );

      latestHealthScoreResult =
        scoreResult;

      const state =
        scoreResult.state;

      const stateText =
        scoreResult.label;

      healthOverallState.className =
        `health-state health-state-${state}`;

      healthOverallState.textContent =
        stateText;

      renderHealthScore(
        scoreResult
      );
      healthLastUpdated.textContent =
        requestCount === 0
          ? "Telemetry is ready and waiting for live requests."
          : `Updated ${new Date().toLocaleTimeString()}`;
      healthRequestCount.textContent = String(telemetry.requests || 0);
      healthSuccessRate.textContent =
        requestCount === 0
          ? "Waiting"
          : `${Number(
              telemetry.successRate || 0
            ).toFixed(1)}%`;
      const cacheMeasurementCount =
        Number(
          telemetry.cacheHits || 0
        ) +
        Number(
          telemetry.cacheMisses || 0
        );

      healthCacheHitRate.textContent =
        cacheMeasurementCount === 0
          ? "Waiting"
          : `${Number(
              telemetry.cacheHitRate || 0
            ).toFixed(1)}%`;
      healthAverageResponse.textContent =
        requestCount === 0
          ? "Waiting"
          : `${telemetry.averageDurationMs || 0} ms`;
      healthSuccessCount.textContent = String(telemetry.successes || 0);
      healthFailureCount.textContent = String(telemetry.failures || 0);
      healthMaxResponse.textContent =
        requestCount === 0
          ? "Waiting"
          : `${telemetry.maxDurationMs || 0} ms`;
      healthLastRequest.textContent = telemetry.lastRequestAt ? new Date(telemetry.lastRequestAt).toLocaleString() : "—";
      healthCacheHits.textContent = String(telemetry.cacheHits || 0);
      healthCacheMisses.textContent = String(telemetry.cacheMisses || 0);

      renderHealthMap(healthActionsList, telemetry.actions, "No action data yet.");
      renderHealthMap(healthScreensList, telemetry.screens, "No screen data yet.");

      if (telemetry.lastError) {
        healthErrorBox.className =
          "health-error-box visible";

        healthErrorBox.textContent =
          `Last recorded error: ${telemetry.lastError}`;

      } else {
        healthErrorBox.className =
          "health-error-box";

        healthErrorBox.textContent =
          "";
      }
    }

    function renderHealthMap(container, values, emptyText) {
      const entries = Object.entries(values || {}).sort((a, b) => Number(b[1]) - Number(a[1]));

      if (entries.length === 0) {
        container.innerHTML = `<div class="health-row"><div class="health-row-label">${escapeHtml(emptyText)}</div><div class="health-row-value">—</div></div>`;
        return;
      }

      container.innerHTML = entries.map(([label, value]) => `
        <div class="health-row">
          <div class="health-row-label">${escapeHtml(label)}</div>
          <div class="health-row-value">${escapeHtml(String(value))}</div>
        </div>
      `).join("");
    }

    function showSystemHealthError(message) {
      healthOverallState.className = "health-state health-state-error";
      healthOverallState.textContent = "Unavailable";
      healthLastUpdated.textContent = "System Health could not be loaded.";
      healthErrorBox.className = "health-error-box visible";
      healthErrorBox.textContent = message;
    }

    /*
     * =====================================================
     * DASHBOARD OFFLINE MODE
     * =====================================================
     */

    function readDashboardOfflineSnapshot() {
      try {
        const raw =
          localStorage.getItem(
            DASHBOARD_OFFLINE_STORAGE_KEY
          );

        if (!raw) {
          return {
            savedAt:
              "",
            screens:
              {}
          };
        }

        const parsed =
          JSON.parse(raw);

        if (
          !parsed ||
          typeof parsed !== "object"
        ) {
          throw new Error(
            "Invalid snapshot"
          );
        }

        return {
          savedAt:
            parsed.savedAt || "",
          screens:
            parsed.screens || {},
          holidayOverrides:
            Array.isArray(parsed.holidayOverrides)
              ? parsed.holidayOverrides
              : [],
          backupHistory:
            Array.isArray(parsed.backupHistory)
              ? parsed.backupHistory
              : [],
          auditEntries:
            Array.isArray(parsed.auditEntries)
              ? parsed.auditEntries
              : []
        };

      } catch (error) {
        return {
          savedAt:
            "",
          screens:
            {}
        };
      }
    }


    function persistDashboardOfflineSnapshot() {
      try {
        dashboardOfflineSnapshot.savedAt =
          new Date().toISOString();

        localStorage.setItem(
          DASHBOARD_OFFLINE_STORAGE_KEY,
          JSON.stringify(
            dashboardOfflineSnapshot
          )
        );
      } catch (error) {
        console.warn(
          "Could not save dashboard offline snapshot.",
          error
        );
      }
    }


    function saveScreenOfflineSnapshot(
      screenName,
      state
    ) {
      dashboardOfflineSnapshot.screens =
        dashboardOfflineSnapshot.screens ||
        {};

      dashboardOfflineSnapshot.screens[
        screenName
      ] = {
        source:
          state.source,
        activeDate:
          state.activeDate || "",
        schedule:
          state.schedule,
        savedAt:
          new Date().toISOString()
      };

      persistDashboardOfflineSnapshot();
    }


    function saveOfflineSnapshotSection(
      key,
      value
    ) {
      dashboardOfflineSnapshot[key] =
        value;

      persistDashboardOfflineSnapshot();
    }


    function getOfflineScreenSnapshot(
      screenName
    ) {
      const snapshot =
        dashboardOfflineSnapshot &&
        dashboardOfflineSnapshot.screens
          ? dashboardOfflineSnapshot.screens[
              screenName
            ]
          : null;

      if (
        !snapshot ||
        !Array.isArray(snapshot.schedule) ||
        snapshot.schedule.length === 0
      ) {
        return null;
      }

      const savedAt =
        new Date(
          snapshot.savedAt ||
          dashboardOfflineSnapshot.savedAt ||
          0
        );

      if (
        !Number.isFinite(
          savedAt.getTime()
        ) ||
        Date.now() -
          savedAt.getTime() >
          DASHBOARD_OFFLINE_MAX_AGE_MS
      ) {
        return null;
      }

      return snapshot;
    }


    function restoreScreenFromOfflineSnapshot(
      screenName,
      reason
    ) {
      const snapshot =
        getOfflineScreenSnapshot(
          screenName
        );

      if (!snapshot) {
        return false;
      }

      const now =
        new Date();

      const activeItem =
        getActiveScheduleItem(
          snapshot.schedule,
          getCurrentHHMM(now)
        );

      const nextItem =
        getNextScheduleItem(
          snapshot.schedule,
          now
        );

      const state = {
        screenName:
          screenName,

        source:
          snapshot.source === "holiday"
            ? "holiday"
            : "regular",

        activeDate:
          snapshot.activeDate || "",

        schedule:
          snapshot.schedule,

        activeItem:
          activeItem,

        nextItem:
          nextItem,

        imageMissing:
          false,

        error:
          null,

        offlineSnapshot:
          true,

        snapshotSavedAt:
          snapshot.savedAt ||
          dashboardOfflineSnapshot.savedAt,

        offlineReason:
          String(reason || "")
      };

      screenStates.set(
        screenName,
        state
      );

      offlineScreens.add(
        screenName
      );

      updateScreenCard(
        state
      );

      updateDashboardSummary();
      updateOfflineModeBanner();

      return true;
    }


    function restoreHolidayOverridesFromSnapshot(
      reason
    ) {
      const rows =
        dashboardOfflineSnapshot
          .holidayOverrides;

      if (!Array.isArray(rows)) {
        return false;
      }

      holidayOverrides =
        rows;

      offlineSections.add(
        "holiday"
      );

      renderHolidayOverrides();
      updateOfflineModeBanner();

      console.warn(reason);
      return true;
    }


    function restoreBackupHistoryFromSnapshot(
      reason
    ) {
      const rows =
        dashboardOfflineSnapshot
          .backupHistory;

      if (!Array.isArray(rows)) {
        return false;
      }

      backupHistory =
        rows;

      offlineSections.add(
        "backups"
      );

      renderBackupHistory();
      updateOfflineModeBanner();

      console.warn(reason);
      return true;
    }


    function restoreAuditLogFromSnapshot(
      reason
    ) {
      const rows =
        dashboardOfflineSnapshot
          .auditEntries;

      if (!Array.isArray(rows)) {
        return false;
      }

      auditEntries =
        rows;

      offlineSections.add(
        "audit"
      );

      renderAuditLog();
      updateOfflineModeBanner();

      console.warn(reason);
      return true;
    }


    function isDashboardOfflineMode() {
      return (
        offlineScreens.size > 0 ||
        offlineSections.size > 0
      );
    }


    function updateOfflineModeBanner() {
      const offline =
        isDashboardOfflineMode();

      offlineModeBanner.classList.toggle(
        "visible",
        offline
      );

      if (!offline) {
        offlineModeDescription.textContent =
          "Apps Script is connected.";

        offlineModeAge.textContent =
          "Live";

      } else {
        const affected = [
          ...Array.from(
            offlineScreens
          ),
          ...Array.from(
            offlineSections
          ).map(
            value =>
              value === "holiday"
                ? "Holiday Overrides"
                : value === "backups"
                  ? "Backup History"
                  : "Audit Log"
          )
        ];

        offlineModeDescription.textContent =
          `Showing cached data for: ${affected.join(", ")}. Saving is disabled until live data returns.`;

        offlineModeAge.textContent =
          dashboardOfflineSnapshot.savedAt
            ? `Snapshot ${formatOfflineSnapshotAge(dashboardOfflineSnapshot.savedAt)}`
            : "Snapshot time unavailable";
      }

      updateManagerEditingControls();
      updateHolidayEditingControls();
    }


    function formatOfflineSnapshotAge(
      value
    ) {
      const date =
        new Date(value);

      if (
        !Number.isFinite(
          date.getTime()
        )
      ) {
        return "age unknown";
      }

      const elapsed =
        Math.max(
          0,
          Date.now() -
          date.getTime()
        );

      const minutes =
        Math.floor(
          elapsed / 60000
        );

      if (minutes < 1) {
        return "saved less than a minute ago";
      }

      if (minutes < 60) {
        return `saved ${minutes} minute${minutes === 1 ? "" : "s"} ago`;
      }

      const hours =
        Math.floor(
          minutes / 60
        );

      if (hours < 24) {
        return `saved ${hours} hour${hours === 1 ? "" : "s"} ago`;
      }

      const days =
        Math.floor(
          hours / 24
        );

      return `saved ${days} day${days === 1 ? "" : "s"} ago`;
    }


    /*
     * =====================================================
     * AUTOMATIC HEALTH CHECKS
     * =====================================================
     */

    function startAutomaticHealthChecks() {
      stopAutomaticHealthChecks();

      automaticHealthCheckTimer =
        setInterval(
          function() {
            if (
              systemHealthWorkspace.classList.contains(
                "active"
              )
            ) {
              runAutomaticHealthChecks();
            }
          },
          5 * 60 * 1000
        );
    }


    function stopAutomaticHealthChecks() {
      if (automaticHealthCheckTimer) {
        clearInterval(
          automaticHealthCheckTimer
        );

        automaticHealthCheckTimer =
          null;
      }
    }


    async function runAutomaticHealthChecks() {
      if (automaticHealthCheckInProgress) {
        return;
      }

      automaticHealthCheckInProgress =
        true;

      runAutomaticHealthChecksButton.disabled =
        true;

      runAutomaticHealthChecksButton.textContent =
        "Checking…";

      automaticHealthChecksStatus.textContent =
        "Running service checks…";

      const checks = [];

      try {
        checks.push(
          await checkAppsScriptHealth()
        );

        checks.push(
          await checkGitHubImageIndexHealth()
        );

        checks.push(
          checkScheduleFeedHealth()
        );

        checks.push(
          checkOfflineSnapshotHealth()
        );

        checks.push(
          checkDashboardCacheHealth()
        );

        renderAutomaticHealthChecks(
          checks
        );

      } finally {
        automaticHealthCheckInProgress =
          false;

        runAutomaticHealthChecksButton.disabled =
          false;

        runAutomaticHealthChecksButton.textContent =
          "Run checks now";
      }
    }


    async function checkAppsScriptHealth() {
      const startedAt =
        performance.now();

      try {
        const payload =
          await fetchJsonpPayload(
            "healthManager"
          );

        const elapsed =
          Math.round(
            performance.now() -
            startedAt
          );

        if (
          !payload ||
          payload.success !== true
        ) {
          throw new Error(
            payload &&
            payload.error
              ? payload.error
              : "Apps Script returned an invalid response."
          );

          if (
            payload &&
            payload.success === false &&
            /sheet.*Schedule|tab.*Schedule|Schedule.*not found/i.test(
              String(payload.error || "")
            )
          ) {
            throw new Error(
              "Older Apps Script deployment detected. You do not need a Schedule tab; redeploy the telemetry-enabled Signage.gs."
            );
          }
        }

        return {
          icon:
            "🟢",

          title:
            "Apps Script endpoint",

          detail:
            `Responded in ${elapsed} ms.`,

          level:
            elapsed > 3000
              ? "warning"
              : "ok",

          status:
            elapsed > 3000
              ? "Slow"
              : "Online"
        };

      } catch (error) {
        return {
          icon:
            "🔴",

          title:
            "Apps Script endpoint",

          detail:
            error.message ||
            "Apps Script could not be reached.",

          level:
            "error",

          status:
            "Offline"
        };
      }
    }


    async function checkGitHubImageIndexHealth() {
      const startedAt =
        performance.now();

      try {
        const response =
          await fetch(
            `${GITHUB_IMAGE_INDEX_FILE}?_=${Date.now()}`,
            {
              cache:
                "no-store"
            }
          );

        if (!response.ok) {
          throw new Error(
            `GitHub returned HTTP ${response.status}.`
          );
        }

        const payload =
          await response.json();

        if (
          !payload ||
          !Array.isArray(
            payload.images
          )
        ) {
          throw new Error(
            "image-index.json has an invalid format."
          );
        }

        const elapsed =
          Math.round(
            performance.now() -
            startedAt
          );

        return {
          icon:
            "🟢",

          title:
            "GitHub image index",

          detail:
            `${payload.images.length} image(s) indexed · ${elapsed} ms.`,

          level:
            "ok",

          status:
            "Available"
        };

      } catch (error) {
        return {
          icon:
            "🟠",

          title:
            "GitHub image index",

          detail:
            `${error.message || error} The dashboard can still fall back to the GitHub API.`,

          level:
            "warning",

          status:
            "Fallback"
        };
      }
    }


    function checkScheduleFeedHealth() {
      const loaded =
        Array.from(
          screenStates.values()
        ).filter(
          state =>
            state &&
            !state.error
        ).length;

      const offline =
        offlineScreens.size;

      if (
        loaded === SCREEN_NAMES.length &&
        offline === 0
      ) {
        return {
          icon:
            "🟢",

          title:
            "Schedule feeds",

          detail:
            `All ${SCREEN_NAMES.length} configured screens have live schedule data.`,

          level:
            "ok",

          status:
            "Healthy"
        };
      }

      if (loaded > 0) {
        return {
          icon:
            "🟠",

          title:
            "Schedule feeds",

          detail:
            `${loaded} of ${SCREEN_NAMES.length} screen(s) loaded · ${offline} using cached data.`,

          level:
            "warning",

          status:
            "Partial"
        };
      }

      return {
        icon:
          "🔴",

        title:
          "Schedule feeds",

        detail:
          "No live screen schedules are currently available.",

        level:
          "error",

        status:
          "Unavailable"
      };
    }


    function checkOfflineSnapshotHealth() {
      const savedAt =
        dashboardOfflineSnapshot &&
        dashboardOfflineSnapshot.savedAt
          ? new Date(
              dashboardOfflineSnapshot.savedAt
            )
          : null;

      if (
        !savedAt ||
        !Number.isFinite(
          savedAt.getTime()
        )
      ) {
        return {
          icon:
            "🟠",

          title:
            "Offline snapshot",

          detail:
            "No reusable offline snapshot has been stored yet.",

          level:
            "warning",

          status:
            "Missing"
        };
      }

      const ageMs =
        Date.now() -
        savedAt.getTime();

      if (
        ageMs >
        DASHBOARD_OFFLINE_MAX_AGE_MS
      ) {
        return {
          icon:
            "🔴",

          title:
            "Offline snapshot",

          detail:
            `Snapshot is too old: ${formatOfflineSnapshotAge(savedAt)}.`,

          level:
            "error",

          status:
            "Expired"
        };
      }

      return {
        icon:
          "🟢",

        title:
          "Offline snapshot",

        detail:
          `Available · ${formatOfflineSnapshotAge(savedAt)}.`,

        level:
          "ok",

        status:
          "Ready"
      };
    }


    function checkDashboardCacheHealth() {
      try {
        const raw =
          localStorage.getItem(
            DASHBOARD_OFFLINE_STORAGE_KEY
          );

        const bytes =
          raw
            ? new Blob([raw]).size
            : 0;

        return {
          icon:
            "🟢",

          title:
            "Browser storage",

          detail:
            `${Math.round(bytes / 1024)} KB currently used by the offline snapshot.`,

          level:
            "ok",

          status:
            "Available"
        };

      } catch (error) {
        return {
          icon:
            "🔴",

          title:
            "Browser storage",

          detail:
            "Local browser storage is unavailable.",

          level:
            "error",

          status:
            "Blocked"
        };
      }
    }


    function fetchJsonpPayload(
      action
    ) {
      return new Promise(
        (resolve, reject) => {
          const callbackName =
            `healthCheckCallback_${Date.now()}_${Math.random()
              .toString(36)
              .slice(2)}`;

          const script =
            document.createElement(
              "script"
            );

          let completed =
            false;

          const cleanup =
            function() {
              if (script.remove) {
                script.remove();
              }

              try {
                delete window[
                  callbackName
                ];
              } catch (error) {
                window[
                  callbackName
                ] = undefined;
              }
            };

          const timeout =
            setTimeout(
              function() {
                if (completed) {
                  return;
                }

                completed =
                  true;

                cleanup();

                reject(
                  new Error(
                    "Request timed out."
                  )
                );
              },
              15000
            );

          window[
            callbackName
          ] = function(payload) {
            if (completed) {
              return;
            }

            completed =
              true;

            clearTimeout(
              timeout
            );

            cleanup();
            resolve(payload);
          };

          script.onerror =
            function() {
              if (completed) {
                return;
              }

              completed =
                true;

              clearTimeout(
                timeout
              );

              cleanup();

              reject(
                new Error(
                  "Could not connect."
                )
              );
            };

          const separator =
            SCHEDULE_FEED_URL.includes("?")
              ? "&"
              : "?";

          script.src =
            `${SCHEDULE_FEED_URL}` +
            `${separator}action=${encodeURIComponent(action)}` +
            `&callback=${encodeURIComponent(callbackName)}` +
            `&_=${Date.now()}`;

          document.head.appendChild(
            script
          );
        }
      );
    }


    function renderAutomaticHealthChecks(
      checks
    ) {
      const errors =
        checks.filter(
          check =>
            check.level === "error"
        ).length;

      const warnings =
        checks.filter(
          check =>
            check.level === "warning"
        ).length;

      automaticHealthChecksStatus.textContent =
        errors > 0
          ? `${errors} critical issue(s) and ${warnings} warning(s) found.`
          : warnings > 0
            ? `${warnings} warning(s) found.`
            : `All checks passed at ${new Date().toLocaleTimeString()}.`;

      automaticHealthChecksList.innerHTML =
        checks.map(
          check => `
            <div class="auto-health-item">
              <div class="auto-health-icon">
                ${escapeHtml(check.icon)}
              </div>

              <div class="auto-health-main">
                <div class="auto-health-title">
                  ${escapeHtml(check.title)}
                </div>

                <div class="auto-health-detail">
                  ${escapeHtml(check.detail)}
                </div>
              </div>

              <div class="auto-health-status auto-health-${escapeHtml(check.level)}">
                ${escapeHtml(check.status)}
              </div>
            </div>
          `
        ).join("");
    }



    /*
     * SYSTEM HEALTH V2 ADMIN ACTIONS
     */

    function runHealthAdminOperation(
      operation
    ) {
      const descriptions = {
        testConnection:
          "test the Apps Script connection",

        clearLastError:
          "clear the stored telemetry error",

        resetTelemetry:
          "reset all telemetry statistics",

        clearScheduleCache:
          "clear every schedule feed cache"
      };

      const pin =
        window.prompt(
          `Enter the dashboard save PIN to ${descriptions[operation]}:`
        );

      if (pin === null) {
        return;
      }

      if (!String(pin).trim()) {
        showHealthAdminMessage(
          "A dashboard PIN is required.",
          "error"
        );

        return;
      }

      if (
        operation !== "testConnection" &&
        !window.confirm(
          `Are you sure you want to ${descriptions[operation]}?`
        )
      ) {
        return;
      }

      activeHealthAdminRequestId =
        createSaveRequestId();

      setHealthAdminButtonsDisabled(
        true
      );

      showHealthAdminMessage(
        "Sending the maintenance request…",
        "success"
      );

      healthAdminForm.action =
        SCHEDULE_FEED_URL;

      healthAdminPinField.value =
        String(pin);

      healthAdminOperationField.value =
        operation;

      healthAdminRequestIdField.value =
        activeHealthAdminRequestId;

      healthAdminForm.submit();

      healthAdminPinField.value =
        "";
    }


    function handleHealthAdminMessage(
      event
    ) {
      const data =
        event.data;

      if (
        !data ||
        data.type !== "miniGolfHealthAdminResult" ||
        data.requestId !== activeHealthAdminRequestId
      ) {
        return;
      }

      activeHealthAdminRequestId =
        null;

      setHealthAdminButtonsDisabled(
        false
      );

      if (data.success !== true) {
        showHealthAdminMessage(
          data.error ||
          "The maintenance action failed.",
          "error"
        );

        return;
      }

      showHealthAdminMessage(
        data.message ||
        "Maintenance action completed.",
        "success"
      );

      if (data.telemetry) {
        renderSystemHealth(
          data.telemetry
        );
      }

      runAutomaticHealthChecks();
    }


    function setHealthAdminButtonsDisabled(
      disabled
    ) {
      [
        testHealthConnectionButton,
        clearHealthLastErrorButton,
        resetHealthTelemetryButton,
        clearHealthCacheButton
      ].forEach(
        button => {
          button.disabled =
            disabled;
        }
      );
    }


    function showHealthAdminMessage(
      message,
      type
    ) {
      healthAdminMessage.className =
        `health-admin-message visible ${type}`;

      healthAdminMessage.textContent =
        message;
    }


    function exportHealthTelemetry() {
      if (!latestHealthTelemetry) {
        showHealthAdminMessage(
          "Load System Health before exporting telemetry.",
          "error"
        );

        return;
      }

      const blob =
        new Blob(
          [
            JSON.stringify(
              {
                exportedAt:
                  new Date().toISOString(),

                telemetry:
                  latestHealthTelemetry
              },
              null,
              2
            )
          ],
          {
            type:
              "application/json"
          }
        );

      const url =
        URL.createObjectURL(
          blob
        );

      const link =
        document.createElement(
          "a"
        );

      link.href =
        url;

      link.download =
        `system-health-${new Date()
          .toISOString()
          .slice(0, 10)}.json`;

      document.body.appendChild(
        link
      );

      link.click();
      link.remove();

      URL.revokeObjectURL(
        url
      );

      showHealthAdminMessage(
        "Telemetry JSON exported.",
        "success"
      );
    }



    /*
     * PLAYER HEARTBEAT
     */

    async function loadPlayerHeartbeats() {
      refreshPlayerHeartbeatsButton.disabled =
        true;

      refreshPlayerHeartbeatsButton.textContent =
        "Loading…";

      playerHeartbeatSummary.textContent =
        "Reading player heartbeat data…";

      try {
        const payload =
          await fetchJsonpPayload(
            "heartbeatManager"
          );

        if (
          !payload ||
          payload.success !== true ||
          !Array.isArray(payload.players)
        ) {
          throw new Error(
            payload && payload.error
              ? payload.error
              : "Heartbeat data was unavailable."
          );
        }

        renderPlayerHeartbeats(
          payload.players
        );

      } catch (error) {
        playerHeartbeatSummary.textContent =
          error.message ||
          "Could not load player heartbeat data.";

        playerHeartbeatGrid.innerHTML =
          "";

      } finally {
        refreshPlayerHeartbeatsButton.disabled =
          false;

        refreshPlayerHeartbeatsButton.textContent =
          "Refresh players";
      }
    }


    function startPlayerHeartbeatAutoRefresh() {
      stopPlayerHeartbeatAutoRefresh();

      playerHeartbeatRefreshTimer =
        setInterval(
          function() {
            if (
              systemHealthWorkspace.classList.contains(
                "active"
              )
            ) {
              loadPlayerHeartbeats();
            }
          },
          30 * 1000
        );
    }


    function stopPlayerHeartbeatAutoRefresh() {
      if (playerHeartbeatRefreshTimer) {
        clearInterval(
          playerHeartbeatRefreshTimer
        );

        playerHeartbeatRefreshTimer =
          null;
      }
    }


    function isPlayerQuietHours() {
      const hour =
        new Date().getHours();

      return (
        hour >= 22 ||
        hour < 10
      );
    }


    function formatHeartbeatAge(
      ageSeconds
    ) {
      if (
        ageSeconds === null ||
        ageSeconds === undefined ||
        !Number.isFinite(
          Number(ageSeconds)
        )
      ) {
        return "Never seen";
      }

      const seconds =
        Math.max(
          0,
          Number(ageSeconds)
        );

      if (seconds < 60) {
        const rounded =
          Math.round(seconds);

        return `${rounded} second${rounded === 1 ? "" : "s"} ago`;
      }

      const minutes =
        Math.floor(
          seconds / 60
        );

      if (minutes < 60) {
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
      }

      const hours =
        Math.floor(
          minutes / 60
        );

      return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    }


    function renderPlayerHeartbeats(players) {
      latestPlayerHeartbeats =
        Array.isArray(players)
          ? players
          : [];

      const playerMap =
        new Map(
          players.map(
            item => [
              item.screen,
              item
            ]
          )
        );

      const quietHours =
        isPlayerQuietHours();

      const normalized =
        SCREEN_NAMES.map(
          screenName => {
            const source =
              playerMap.get(
                screenName
              ) || {
                screen:
                  screenName,

                status:
                  "offline",

                lastSeenAt:
                  "",

                ageSeconds:
                  null,

                currentImage:
                  "",

                playerVersion:
                  ""
              };

            if (
              quietHours &&
              source.status !== "online"
            ) {
              return {
                ...source,
                status:
                  "sleeping"
              };
            }

            return source;
          }
        );

      try {
        renderPlayerVersionCompliance(
          normalized
        );
      } catch (error) {
        console.warn(
          "Player Version Compliance could not render.",
          error
        );
      }

      const onlineCount =
        normalized.filter(
          item =>
            item.status === "online"
        ).length;

      const staleCount =
        normalized.filter(
          item =>
            item.status === "stale"
        ).length;

      const sleepingCount =
        normalized.filter(
          item =>
            item.status === "sleeping"
        ).length;

      const offlineCount =
        normalized.length -
        onlineCount -
        staleCount -
        sleepingCount;

      playerHeartbeatSummary.textContent =
        `${onlineCount} online · ` +
        `${staleCount} stale · ` +
        `${sleepingCount} sleeping · ` +
        `${offlineCount} offline`;

      playerHeartbeatMeta.textContent =
        quietHours
          ? "Quiet hours are active. Inactive players are shown as Sleeping instead of Offline."
          : "Active hours are in effect. Players should check in at least once every 90 seconds.";

      playerHeartbeatGrid.innerHTML =
        normalized.map(
          item => {
            const allowedStatuses = [
              "online",
              "stale",
              "sleeping"
            ];

            const status =
              allowedStatuses.includes(
                item.status
              )
                ? item.status
                : "offline";

            const lastSeen =
              item.lastSeenAt
                ? new Date(
                    item.lastSeenAt
                  ).toLocaleString()
                : "Never seen";

            const ageText =
              formatHeartbeatAge(
                item.ageSeconds
              );

            return `
              <article class="player-heartbeat-card ${status}">
                <div class="player-heartbeat-header">
                  <div class="player-heartbeat-name">
                    ${escapeHtml(item.screen)}
                  </div>

                  <div class="player-heartbeat-status ${status}">
                    ${escapeHtml(status)}
                  </div>
                </div>

                <div class="player-heartbeat-details">
                  <div>
                    Last seen:
                    ${escapeHtml(lastSeen)}
                  </div>

                  <div>
                    Age:
                    ${escapeHtml(ageText)}
                  </div>

                  <div>
                    Current image:
                    ${escapeHtml(item.currentImage || "Unknown")}
                  </div>

                  <div>
                    Player version:
                    ${escapeHtml(item.playerVersion || "Unknown")}
                  </div>
                </div>
              </article>
            `;
          }
        ).join("");
    }


    /*
     * =====================================================
     * ADVANCED SYSTEM HEALTH SCORING
     * =====================================================
     */

    function calculateSystemHealthScore(
      metrics
    ) {
      if (metrics.requestCount === 0) {
        return {
          score:
            null,

          state:
            "warning",

          label:
            "Waiting for data",

          reasons: [
            {
              icon:
                "⏳",

              text:
                "No live requests have been measured yet."
            }
          ]
        };
      }

      let score =
        100;

      const reasons =
        [];

      const failureRate =
        metrics.requestCount > 0
          ? (
              metrics.failures /
              metrics.requestCount
            ) *
            100
          : 0;

      /*
       * Reliability is scored by percentage, not raw count.
       * Eight failures out of more than one thousand requests
       * should not be treated the same as eight failures out
       * of twenty requests.
       */
      if (
        failureRate <= 0.5
      ) {
        reasons.push({
          icon:
            "✅",

          text:
            `Excellent reliability: ${metrics.successRate.toFixed(1)}% success (${failureRate.toFixed(2)}% failed).`
        });

      } else if (
        failureRate <= 1
      ) {
        score -= 3;

        reasons.push({
          icon:
            "🟢",

          text:
            `Strong reliability: ${metrics.successRate.toFixed(1)}% success (${failureRate.toFixed(2)}% failed).`
        });

      } else if (
        failureRate <= 2
      ) {
        score -= 8;

        reasons.push({
          icon:
            "🟡",

          text:
            `Minor reliability concern: ${failureRate.toFixed(2)}% of requests failed.`
        });

      } else if (
        failureRate <= 5
      ) {
        score -= 18;

        reasons.push({
          icon:
            "🟠",

          text:
            `Reliability needs attention: ${failureRate.toFixed(2)}% of requests failed.`
        });

      } else {
        score -= 35;

        reasons.push({
          icon:
            "🔴",

          text:
            `High failure rate: ${failureRate.toFixed(2)}% of requests failed.`
        });
      }

      /*
       * Average response time carries more weight than the
       * single slowest request.
       */
      if (
        metrics.averageDuration <= 500
      ) {
        reasons.push({
          icon:
            "⚡",

          text:
            `Fast average response: ${metrics.averageDuration} ms.`
        });

      } else if (
        metrics.averageDuration <= 1200
      ) {
        score -= 2;

        reasons.push({
          icon:
            "🟢",

          text:
            `Good average response: ${metrics.averageDuration} ms.`
        });

      } else if (
        metrics.averageDuration <= 2000
      ) {
        score -= 6;

        reasons.push({
          icon:
            "🟡",

          text:
            `Acceptable but slightly slow average response: ${metrics.averageDuration} ms.`
        });

      } else if (
        metrics.averageDuration <= 3500
      ) {
        score -= 14;

        reasons.push({
          icon:
            "🟠",

          text:
            `Slow average response: ${metrics.averageDuration} ms.`
        });

      } else {
        score -= 28;

        reasons.push({
          icon:
            "🔴",

          text:
            `Very slow average response: ${metrics.averageDuration} ms.`
        });
      }

      /*
       * A single peak is informational unless it is extreme.
       */
      if (
        metrics.maxDuration > 15000
      ) {
        score -= 4;

        reasons.push({
          icon:
            "⏱️",

          text:
            `One request peaked at ${metrics.maxDuration} ms.`
        });

      } else if (
        metrics.maxDuration > 5000
      ) {
        reasons.push({
          icon:
            "⏱️",

          text:
            `One isolated request peaked at ${metrics.maxDuration} ms.`
        });
      }

      /*
       * Low cache usage is only a problem when the system is
       * also responding slowly. Different screens often read
       * different schedules, so a low hit rate can be normal.
       */
      if (
        metrics.cacheHitRate >= 60
      ) {
        reasons.push({
          icon:
            "💾",

          text:
            `Cache is highly effective: ${metrics.cacheHitRate.toFixed(1)}% hit rate.`
        });

      } else if (
        metrics.cacheHitRate >= 20
      ) {
        reasons.push({
          icon:
            "📦",

          text:
            `Cache hit rate is ${metrics.cacheHitRate.toFixed(1)}%.`
        });

      } else if (
        metrics.averageDuration > 2000
      ) {
        score -= 4;

        reasons.push({
          icon:
            "📦",

          text:
            `Low cache usage (${metrics.cacheHitRate.toFixed(1)}%) is contributing to slower responses.`
        });

      } else {
        reasons.push({
          icon:
            "ℹ️",

          text:
            `Low cache hit rate (${metrics.cacheHitRate.toFixed(1)}%), but response time remains acceptable.`
        });
      }

      score =
        Math.max(
          0,
          Math.min(
            100,
            Math.round(score)
          )
        );

      let state =
        "healthy";

      let label =
        "Healthy";

      if (score < 88) {
        state =
          "warning";

        label =
          "Degraded";
      }

      if (score < 65) {
        state =
          "error";

        label =
          "Unhealthy";
      }

      return {
        score:
          score,

        state:
          state,

        label:
          label,

        reasons:
          reasons
      };
    }


    function setupMissionQuickActions() {
      document
        .querySelectorAll(
          "[data-mission-workspace]"
        )
        .forEach(
          card => {
            card.addEventListener(
              "click",
              function() {
                const workspaceName =
                  card.getAttribute(
                    "data-mission-workspace"
                  );

                openWorkspace(
                  workspaceName
                );

                const healthAnchor =
                  card.getAttribute(
                    "data-mission-health-anchor"
                  );

                if (healthAnchor === "rollout") {
                  setTimeout(
                    function() {
                      const rolloutPanel =
                        document.querySelector(
                          ".rollout-assistant"
                        );

                      if (rolloutPanel) {
                        rolloutPanel.scrollIntoView({
                          behavior:
                            "smooth",

                          block:
                            "start"
                        });
                      }
                    },
                    100
                  );
                }
              }
            );
          }
        );
    }


    function renderMissionGreeting() {
      if (!missionGreeting) {
        return;
      }

      const hour =
        new Date().getHours();

      const greeting =
        hour < 12
          ? "Good morning"
          : hour < 18
            ? "Good afternoon"
            : "Good evening";

      const onlinePlayers =
        latestPlayerHeartbeats.filter(
          player =>
            player.status === "online"
        ).length;

      const playerMessage =
        typeof isPlayerQuietHours === "function" &&
        isPlayerQuietHours()
          ? "Quiet hours are active."
          : `${onlinePlayers}/${SCREEN_NAMES.length} players are online.`;

      missionGreeting.textContent =
        `${greeting}. ${playerMessage}`;
    }


    function renderMissionQuickActionStatuses() {
      if (missionScheduleActionStatus) {
        const loadedScreenCount =
          SCREEN_NAMES.filter(
            screenName =>
              screenStates.has(
                screenName
              )
          ).length;

        missionScheduleActionStatus.textContent =
          `${loadedScreenCount}/${SCREEN_NAMES.length} schedules loaded`;
      }

      if (missionHealthActionStatus) {
        missionHealthActionStatus.textContent =
          latestHealthScoreResult &&
          Number.isFinite(
            latestHealthScoreResult.score
          )
            ? `${latestHealthScoreResult.score}/100 · ${latestHealthScoreResult.label}`
            : "Waiting for health score";
      }

      if (missionRolloutActionStatus) {
        const readyCount =
          SCREEN_NAMES.filter(
            screenName =>
              getRolloutStateForScreen(
                screenName
              ).state === "ready"
          ).length;

        missionRolloutActionStatus.textContent =
          `${readyCount}/${SCREEN_NAMES.length} screens ready`;
      }

      if (missionImagesActionStatus) {
        const imageCount =
          Array.isArray(
            imageLibraryIndex
          )
            ? imageLibraryIndex.length
            : 0;

        missionImagesActionStatus.textContent =
          imageCount > 0
            ? `${imageCount} image${imageCount === 1 ? "" : "s"} indexed`
            : "Browse image library";
      }

      renderMissionGreeting();
    }


    function setMissionStatusCard(
      card,
      valueElement,
      detailElement,
      status,
      value,
      detail
    ) {
      if (
        !card ||
        !valueElement ||
        !detailElement
      ) {
        return;
      }

      card.className =
        `mission-status-card mission-status-${status}`;

      valueElement.textContent =
        value;

      detailElement.textContent =
        detail;
    }


    function renderMissionControlStatuses() {
      if (!missionStatusUpdated) {
        return;
      }

      missionStatusUpdated.textContent =
        `Updated ${new Date().toLocaleTimeString()}`;

      /*
       * GitHub Pages is considered available when this page,
       * its external CSS, and its external JavaScript loaded.
       */
      setMissionStatusCard(
        missionGitHubCard,
        missionGitHubValue,
        missionGitHubDetail,
        "ok",
        "Connected",
        "The development site and modular assets loaded successfully."
      );

      const loadedScreenCount =
        SCREEN_NAMES.filter(
          screenName =>
            screenStates.has(
              screenName
            )
        ).length;

      setMissionStatusCard(
        missionSchedulesCard,
        missionSchedulesValue,
        missionSchedulesDetail,
        loadedScreenCount ===
          SCREEN_NAMES.length
          ? "ok"
          : loadedScreenCount > 0
            ? "warning"
            : "error",
        `${loadedScreenCount}/${SCREEN_NAMES.length}`,
        loadedScreenCount ===
          SCREEN_NAMES.length
          ? "All configured screen schedules are loaded."
          : "Some configured screen schedules are still unavailable."
      );

      const quietHours =
        typeof isPlayerQuietHours === "function"
          ? isPlayerQuietHours()
          : false;

      const onlinePlayers =
        latestPlayerHeartbeats.filter(
          player =>
            player.status === "online"
        ).length;

      setMissionStatusCard(
        missionPlayersCard,
        missionPlayersValue,
        missionPlayersDetail,
        quietHours ||
        onlinePlayers === SCREEN_NAMES.length
          ? "ok"
          : onlinePlayers > 0
            ? "warning"
            : "error",
        quietHours
          ? "Sleeping"
          : `${onlinePlayers}/${SCREEN_NAMES.length}`,
        quietHours
          ? "Quiet hours are active; inactive players are expected."
          : onlinePlayers === SCREEN_NAMES.length
            ? "All players are checking in normally."
            : `${SCREEN_NAMES.length - onlinePlayers} player(s) are not currently online.`
      );

      const snapshotSavedAt =
        dashboardOfflineSnapshot &&
        dashboardOfflineSnapshot.savedAt
          ? new Date(
              dashboardOfflineSnapshot.savedAt
            )
          : null;

      const snapshotValid =
        snapshotSavedAt &&
        Number.isFinite(
          snapshotSavedAt.getTime()
        ) &&
        Date.now() -
          snapshotSavedAt.getTime() <=
          DASHBOARD_OFFLINE_MAX_AGE_MS;

      setMissionStatusCard(
        missionBackupCard,
        missionBackupValue,
        missionBackupDetail,
        snapshotValid
          ? "ok"
          : "warning",
        snapshotValid
          ? "Ready"
          : "Review",
        snapshotValid
          ? `Offline recovery snapshot available (${formatOfflineSnapshotAge(snapshotSavedAt)}).`
          : "No recent offline recovery snapshot is available."
      );

      if (latestHealthTelemetry) {
        const cacheHitRate =
          Number(
            latestHealthTelemetry.cacheHitRate || 0
          );

        const averageDuration =
          Number(
            latestHealthTelemetry.averageDurationMs || 0
          );

        setMissionStatusCard(
          missionCacheCard,
          missionCacheValue,
          missionCacheDetail,
          averageDuration <= 2000
            ? "ok"
            : averageDuration <= 3500
              ? "warning"
              : "error",
          `${cacheHitRate.toFixed(1)}%`,
          averageDuration <= 2000
            ? `Average response remains acceptable at ${averageDuration} ms.`
            : `Average response is ${averageDuration} ms and should be reviewed.`
        );

        setMissionStatusCard(
          missionAppsScriptCard,
          missionAppsScriptValue,
          missionAppsScriptDetail,
          latestHealthTelemetry.lastError
            ? "warning"
            : "ok",
          latestHealthTelemetry.lastError
            ? "Connected"
            : "Connected",
          latestHealthTelemetry.lastError
            ? `Connected, with a recorded error: ${latestHealthTelemetry.lastError}`
            : "Telemetry is loading successfully from Apps Script."
        );

      } else {
        setMissionStatusCard(
          missionCacheCard,
          missionCacheValue,
          missionCacheDetail,
          "waiting",
          "Waiting",
          "Telemetry has not loaded yet."
        );

        setMissionStatusCard(
          missionAppsScriptCard,
          missionAppsScriptValue,
          missionAppsScriptDetail,
          "waiting",
          "Checking",
          "Waiting for Apps Script telemetry."
        );
      }

      renderMissionQuickActionStatuses();
    }


    function renderMissionHeroHealth(
      result
    ) {
      if (
        !missionHeroHealth ||
        !missionHeroHealthScore ||
        !missionHeroHealthState
      ) {
        return;
      }

      const safeResult =
        result || {
          score:
            null,

          label:
            "Waiting for telemetry"
        };

      missionHeroHealth.className =
        "mission-hero-health";

      if (safeResult.score === null) {
        missionHeroHealth.classList.add(
          "mission-health-waiting"
        );

        missionHeroHealthScore.textContent =
          "—";

        missionHeroHealthState.textContent =
          "Waiting for telemetry";

        return;
      }

      missionHeroHealthScore.textContent =
        String(
          safeResult.score
        );

      missionHeroHealthState.textContent =
        safeResult.label || "Healthy";

      if (safeResult.score >= 88) {
        missionHeroHealth.classList.add(
          "mission-health-healthy"
        );

      } else if (safeResult.score >= 65) {
        missionHeroHealth.classList.add(
          "mission-health-degraded"
        );

      } else {
        missionHeroHealth.classList.add(
          "mission-health-unhealthy"
        );
      }
    }


    function renderHealthScore(
      result
    ) {
      renderMissionHeroHealth(
        result
      );

      renderMissionControlStatuses();
      if (
        !healthScoreNumber ||
        !healthScoreReasons
      ) {
        return;
      }

      const safeResult =
        result || {
          score:
            null,

          reasons: [
            {
              icon:
                "⏳",

              text:
                "Waiting for telemetry."
            }
          ]
        };

      healthScoreNumber.innerHTML =
        safeResult.score === null
          ? `Waiting <span>/100</span>`
          : `${safeResult.score} <span>/100</span>`;

      healthScoreReasons.innerHTML =
        (safeResult.reasons || [])
          .map(
            reason => `
              <div class="health-reason">
                <div class="health-reason-icon">
                  ${escapeHtml(reason.icon)}
                </div>

                <div class="health-reason-text">
                  ${escapeHtml(reason.text)}
                </div>
              </div>
            `
          )
          .join("");

      runGoLiveReadinessCheck();
      renderRolloutAssistant();
      renderMissionControlStatuses();
    }


    /*
     * =====================================================
     * CONTROLLED ROLLOUT ASSISTANT
     * =====================================================
     */

    function readRolloutProgress() {
      try {
        const raw =
          localStorage.getItem(
            ROLLOUT_PROGRESS_STORAGE_KEY
          );

        if (!raw) {
          return {};
        }

        const parsed =
          JSON.parse(raw);

        return (
          parsed &&
          typeof parsed === "object"
        )
          ? parsed
          : {};

      } catch (error) {
        return {};
      }
    }


    function persistRolloutProgress() {
      try {
        localStorage.setItem(
          ROLLOUT_PROGRESS_STORAGE_KEY,
          JSON.stringify(
            rolloutProgress
          )
        );
      } catch (error) {
        console.warn(
          "Could not save rollout progress.",
          error
        );
      }
    }


    function getRolloutStage(
      screenName
    ) {
      const value =
        rolloutProgress[
          screenName
        ];

      return [
        "testing",
        "deployed"
      ].includes(value)
        ? value
        : "not-started";
    }


    function setRolloutStage(
      screenName,
      stage
    ) {
      const state =
        getRolloutStateForScreen(
          screenName
        );

      if (
        stage === "deployed" &&
        state.state !== "ready"
      ) {
        showRolloutMessage(
          `${screenName} cannot be marked Deployed until all required checks pass.`,
          "error"
        );

        return;
      }

      rolloutProgress[
        screenName
      ] =
        stage;

      persistRolloutProgress();
      renderRolloutAssistant();

      showRolloutMessage(
        `${screenName} is now marked ${stage === "not-started" ? "Not started" : stage}.`,
        "success"
      );
    }


    async function refreshRolloutAssistant() {
      refreshRolloutAssistantButton.disabled =
        true;

      refreshRolloutAssistantButton.textContent =
        "Refreshing…";

      try {
        await loadPlayerVersions();
        renderRolloutAssistant();

      } finally {
        refreshRolloutAssistantButton.disabled =
          false;

        refreshRolloutAssistantButton.textContent =
          "Refresh rollout";
      }
    }


    function getPlayerBaseUrl() {
      const currentUrl =
        new URL(
          window.location.href
        );

      const pathname =
        currentUrl.pathname;

      const directory =
        pathname.slice(
          0,
          pathname.lastIndexOf("/") + 1
        );

      return (
        currentUrl.origin +
        directory +
        "index.html"
      );
    }


    function createRolloutPlayerUrl(
      screenName
    ) {
      const url =
        new URL(
          getPlayerBaseUrl()
        );

      url.searchParams.set(
        "screen",
        screenName
      );

      url.searchParams.set(
        "version",
        String(Date.now())
      );

      return url.toString();
    }


    function getRolloutStateForScreen(
      screenName
    ) {
      const scheduleState =
        screenStates.get(
          screenName
        );

      const heartbeat =
        latestPlayerHeartbeats.find(
          player =>
            player.screen ===
            screenName
        );

      const hasSchedule =
        Boolean(
          scheduleState &&
          Array.isArray(
            scheduleState.schedule
          ) &&
          scheduleState.schedule.length > 0
        );

      const hasFallback =
        Boolean(
          scheduleState &&
          scheduleState.schedule.some(
            item =>
              !item.endTime
          )
        );

      const versionCurrent =
        Boolean(
          heartbeat &&
          heartbeat.playerVersion ===
            EXPECTED_PLAYER_VERSION
        );

      const activeImageMissing =
        Boolean(
          scheduleState &&
          scheduleState.imageMissing === true
        );

      let state =
        "ready";

      let label =
        "Ready";

      const notes =
        [];

      if (!hasSchedule) {
        state =
          "blocked";

        label =
          "Blocked";

        notes.push(
          "Schedule data is missing."
        );
      }

      if (activeImageMissing) {
        state =
          "blocked";

        label =
          "Blocked";

        notes.push(
          "The active image is missing."
        );
      }

      if (
        state !== "blocked" &&
        !hasFallback
      ) {
        state =
          "review";

        label =
          "Review";

        notes.push(
          "No blank-End-Time fallback row."
        );
      }

      if (
        state !== "blocked" &&
        !versionCurrent
      ) {
        state =
          "review";

        label =
          "Review";

        notes.push(
          heartbeat &&
          heartbeat.playerVersion
            ? `Reports ${heartbeat.playerVersion}.`
            : "Approved player version has not checked in yet."
        );
      }

      if (notes.length === 0) {
        notes.push(
          "Schedule, image, fallback, and player version checks passed."
        );
      }

      return {
        state:
          state,

        label:
          label,

        notes:
          notes,

        heartbeat:
          heartbeat,

        scheduleState:
          scheduleState
      };
    }


    function renderRolloutAssistant() {
      if (
        !rolloutAssistantList ||
        !rolloutAssistantSummary
      ) {
        return;
      }

      const states =
        SCREEN_NAMES.map(
          screenName => ({
            screenName:
              screenName,

            ...getRolloutStateForScreen(
              screenName
            )
          })
        );

      const readyCount =
        states.filter(
          item =>
            item.state === "ready"
        ).length;

      const reviewCount =
        states.filter(
          item =>
            item.state === "review"
        ).length;

      const blockedCount =
        states.filter(
          item =>
            item.state === "blocked"
        ).length;

      const testingCount =
        SCREEN_NAMES.filter(
          screenName =>
            getRolloutStage(
              screenName
            ) === "testing"
        ).length;

      const deployedCount =
        SCREEN_NAMES.filter(
          screenName =>
            getRolloutStage(
              screenName
            ) === "deployed"
        ).length;

      rolloutAssistantSummary.textContent =
        `${readyCount} ready · ` +
        `${reviewCount} review · ` +
        `${blockedCount} blocked · ` +
        `${testingCount} testing · ` +
        `${deployedCount} deployed`;

      rolloutAssistantList.innerHTML =
        states
          .map(
            item => {
              const url =
                createRolloutPlayerUrl(
                  item.screenName
                );

              const heartbeat =
                item.heartbeat;

              const lastSeen =
                heartbeat &&
                heartbeat.lastSeenAt
                  ? new Date(
                      heartbeat.lastSeenAt
                    ).toLocaleString()
                  : "Never seen";

              const version =
                heartbeat &&
                heartbeat.playerVersion
                  ? heartbeat.playerVersion
                  : "Not reported";

              return `
                <article class="rollout-card ${item.state}">
                  <div class="rollout-card-header">
                    <div class="rollout-screen-name">
                      ${escapeHtml(item.screenName)}
                    </div>

                    <div class="rollout-state ${item.state}">
                      ${escapeHtml(item.label)}
                    </div>
                  </div>

                  <div class="rollout-url">
                    ${escapeHtml(url)}
                  </div>

                  <div class="rollout-details">
                    <div>
                      Version: ${escapeHtml(version)}
                    </div>

                    <div>
                      Last seen: ${escapeHtml(lastSeen)}
                    </div>

                    <div>
                      ${escapeHtml(item.notes.join(" · "))}
                    </div>
                  </div>

                  <div class="rollout-progress-summary">
                    Deployment stage:
                    <span class="rollout-stage rollout-stage-${getRolloutStage(item.screenName)}">
                      ${getRolloutStage(item.screenName) === "not-started"
                        ? "Not started"
                        : escapeHtml(getRolloutStage(item.screenName))}
                    </span>
                  </div>

                  <div class="rollout-actions">
                    <button
                      class="button"
                      type="button"
                      data-rollout-copy="${escapeHtml(item.screenName)}"
                    >
                      Copy player URL
                    </button>

                    <button
                      class="button button-primary"
                      type="button"
                      data-rollout-open="${escapeHtml(item.screenName)}"
                    >
                      Open test player
                    </button>
                  </div>

                  <div class="rollout-progress-controls">
                    <button
                      class="button"
                      type="button"
                      data-rollout-stage="not-started"
                      data-rollout-screen="${escapeHtml(item.screenName)}"
                    >
                      Mark not started
                    </button>

                    <button
                      class="button"
                      type="button"
                      data-rollout-stage="testing"
                      data-rollout-screen="${escapeHtml(item.screenName)}"
                    >
                      Mark testing
                    </button>

                    <button
                      class="button button-primary"
                      type="button"
                      data-rollout-stage="deployed"
                      data-rollout-screen="${escapeHtml(item.screenName)}"
                    >
                      Mark deployed
                    </button>
                  </div>
                </article>
              `;
            }
          )
          .join("");

      rolloutAssistantList
        .querySelectorAll(
          "[data-rollout-copy]"
        )
        .forEach(
          button => {
            button.addEventListener(
              "click",
              async function() {
                const screenName =
                  button.getAttribute(
                    "data-rollout-copy"
                  );

                await copyRolloutUrl(
                  screenName
                );
              }
            );
          }
        );

      rolloutAssistantList
        .querySelectorAll(
          "[data-rollout-open]"
        )
        .forEach(
          button => {
            button.addEventListener(
              "click",
              function() {
                const screenName =
                  button.getAttribute(
                    "data-rollout-open"
                  );

                window.open(
                  createRolloutPlayerUrl(
                    screenName
                  ),
                  "_blank",
                  "noopener"
                );
              }
            );
          }
        );

      rolloutAssistantList
        .querySelectorAll(
          "[data-rollout-stage]"
        )
        .forEach(
          button => {
            button.addEventListener(
              "click",
              function() {
                const screenName =
                  button.getAttribute(
                    "data-rollout-screen"
                  );

                const stage =
                  button.getAttribute(
                    "data-rollout-stage"
                  );

                setRolloutStage(
                  screenName,
                  stage
                );
              }
            );
          }
        );
    }


    async function copyRolloutUrl(
      screenName
    ) {
      const url =
        createRolloutPlayerUrl(
          screenName
        );

      try {
        await navigator.clipboard.writeText(
          url
        );

        showRolloutMessage(
          `${screenName} player URL copied.`,
          "success"
        );

      } catch (error) {
        const textarea =
          document.createElement(
            "textarea"
          );

        textarea.value =
          url;

        textarea.style.position =
          "fixed";

        textarea.style.opacity =
          "0";

        document.body.appendChild(
          textarea
        );

        textarea.select();

        document.execCommand(
          "copy"
        );

        textarea.remove();

        showRolloutMessage(
          `${screenName} player URL copied.`,
          "success"
        );
      }
    }


    function showRolloutMessage(
      message,
      type
    ) {
      rolloutAssistantMessage.className =
        `rollout-message visible health-admin-message ${type}`;

      rolloutAssistantMessage.textContent =
        message;

      setTimeout(
        function() {
          rolloutAssistantMessage.className =
            "rollout-message";
        },
        3500
      );
    }




    /*
     * PLAYER VERSION COMPLIANCE
     */

    async function loadPlayerVersions() {
      refreshPlayerVersionsButton.disabled =
        true;

      refreshPlayerVersionsButton.textContent =
        "Loading…";

      try {
        const payload =
          await fetchJsonpPayload(
            "heartbeatManager"
          );

        if (
          !payload ||
          payload.success !== true ||
          !Array.isArray(payload.players)
        ) {
          throw new Error(
            payload && payload.error
              ? payload.error
              : "Player version data was unavailable."
          );
        }

        latestPlayerHeartbeats =
          payload.players;

        renderPlayerVersionCompliance(
          normalizePlayerVersionRecords(
            payload.players
          )
        );

        runGoLiveReadinessCheck();

      } catch (error) {
        playerVersionSummary.textContent =
          error.message ||
          "Could not load player versions.";

      } finally {
        refreshPlayerVersionsButton.disabled =
          false;

        refreshPlayerVersionsButton.textContent =
          "Refresh versions";
      }
    }


    function normalizePlayerVersionRecords(
      players
    ) {
      const playerMap =
        new Map(
          (Array.isArray(players)
            ? players
            : []
          ).map(
            player => [
              player.screen,
              player
            ]
          )
        );

      return SCREEN_NAMES.map(
        screenName => {
          const player =
            playerMap.get(
              screenName
            );

          return {
            screen:
              screenName,

            playerVersion:
              player &&
              player.playerVersion
                ? String(
                    player.playerVersion
                  ).trim()
                : "",

            lastSeenAt:
              player &&
              player.lastSeenAt
                ? player.lastSeenAt
                : "",

            status:
              player &&
              player.status
                ? player.status
                : "offline"
          };
        }
      );
    }


    function renderPlayerVersionCompliance(
      players
    ) {
      if (
        !playerVersionSummary ||
        !playerVersionList
      ) {
        return;
      }

      const normalizedPlayers =
        normalizePlayerVersionRecords(
          players
        );

      const currentCount =
        normalizedPlayers.filter(
          player =>
            player.playerVersion ===
            EXPECTED_PLAYER_VERSION
        ).length;

      const outdatedCount =
        normalizedPlayers.filter(
          player =>
            player.playerVersion &&
            player.playerVersion !==
              EXPECTED_PLAYER_VERSION
        ).length;

      const unknownCount =
        normalizedPlayers.length -
        currentCount -
        outdatedCount;

      playerVersionSummary.innerHTML =
        `Expected version: <strong>${escapeHtml(EXPECTED_PLAYER_VERSION)}</strong>` +
        ` · ${currentCount} current` +
        ` · ${outdatedCount} outdated` +
        ` · ${unknownCount} unknown`;

      playerVersionList.innerHTML =
        normalizedPlayers
          .map(
            player => {
              let status =
                "unknown";

              let label =
                "Unknown";

              if (
                player.playerVersion ===
                EXPECTED_PLAYER_VERSION
              ) {
                status =
                  "current";

                label =
                  "Current";

              } else if (
                player.playerVersion
              ) {
                status =
                  "outdated";

                label =
                  "Outdated";
              }

              return `
                <div class="player-version-row ${status}">
                  <div class="player-version-top">
                    <div class="player-version-name">
                      ${escapeHtml(player.screen)}
                    </div>

                    <div class="player-version-badge ${status}">
                      ${escapeHtml(label)}
                    </div>
                  </div>

                  <div class="player-version-detail">
                    Reported:
                    ${escapeHtml(player.playerVersion || "No version received yet")}
                    ${player.lastSeenAt
                      ? ` · Last seen ${escapeHtml(new Date(player.lastSeenAt).toLocaleString())}`
                      : " · Player has not checked in"}
                  </div>
                </div>
              `;
            }
          )
          .join("");
    }


    /*
     * GO-LIVE READINESS
     */

    function runGoLiveReadinessCheck() {
      try {
        const checks =
          buildGoLiveReadinessChecks();

        renderGoLiveReadiness(
          checks
        );

      } catch (error) {
        console.error(
          "Go-Live Preflight failed.",
          error
        );

        goLiveReadinessState.className =
          "go-live-readiness-state go-live-warning";

        goLiveReadinessState.textContent =
          "Review";

        goLiveReadinessHeadline.textContent =
          "Preflight could not complete";

        goLiveReadinessDescription.textContent =
          error.message ||
          "One readiness check could not be evaluated.";
      }
    }


    function buildGoLiveReadinessChecks() {
      const checks =
        [];

      const loadedStates =
        SCREEN_NAMES
          .map(
            screenName =>
              screenStates.get(
                screenName
              )
          )
          .filter(Boolean);

      const missingScreens =
        SCREEN_NAMES.filter(
          screenName =>
            !screenStates.has(
              screenName
            )
        );

      checks.push({
        level:
          missingScreens.length === 0
            ? "ok"
            : "blocked",

        icon:
          missingScreens.length === 0
            ? "✅"
            : "🔴",

        title:
          "All schedules loaded",

        detail:
          missingScreens.length === 0
            ? `All ${SCREEN_NAMES.length} configured screens have schedule data.`
            : `Missing schedule data for: ${missingScreens.join(", ")}.`
      });

      const screensWithoutFallback =
        loadedStates
          .filter(
            state =>
              !state.schedule.some(
                item =>
                  !item.endTime
              )
          )
          .map(
            state =>
              state.screenName
          );

      checks.push({
        level:
          screensWithoutFallback.length === 0
            ? "ok"
            : "warning",

        icon:
          screensWithoutFallback.length === 0
            ? "✅"
            : "🟠",

        title:
          "Fallback rows",

        detail:
          screensWithoutFallback.length === 0
            ? "Every screen has at least one row with a blank End Time."
            : `Add a blank-End-Time fallback row for: ${screensWithoutFallback.join(", ")}.`
      });

      const offlineDataCount =
        loadedStates.filter(
          state =>
            state.offlineSnapshot === true
        ).length;

      checks.push({
        level:
          offlineDataCount === 0
            ? "ok"
            : "warning",

        icon:
          offlineDataCount === 0
            ? "✅"
            : "💾",

        title:
          "Live Apps Script data",

        detail:
          offlineDataCount === 0
            ? "All loaded schedules are live."
            : `${offlineDataCount} screen(s) are using cached dashboard data.`
      });

      const score =
        latestHealthScoreResult &&
        Number.isFinite(
          latestHealthScoreResult.score
        )
          ? latestHealthScoreResult.score
          : null;

      checks.push({
        level:
          score === null
            ? "warning"
            : score >= 88
              ? "ok"
              : score >= 65
                ? "warning"
                : "blocked",

        icon:
          score === null
            ? "⏳"
            : score >= 88
              ? "✅"
              : score >= 65
                ? "🟠"
                : "🔴",

        title:
          "System health score",

        detail:
          score === null
            ? "Health score is still waiting for telemetry."
            : `Current health score: ${score}/100.`
      });

      const imageIssueCount =
        loadedStates.filter(
          state =>
            state.imageMissing === true
        ).length;

      checks.push({
        level:
          imageIssueCount === 0
            ? "ok"
            : "blocked",

        icon:
          imageIssueCount === 0
            ? "✅"
            : "🔴",

        title:
          "Image validation",

        detail:
          imageIssueCount === 0
            ? "No missing active images are detected."
            : `${imageIssueCount} screen(s) reference a missing active image.`
      });

      const normalizedHeartbeatRecords =
        normalizePlayerVersionRecords(
          latestPlayerHeartbeats
        );

      const heartbeatMap =
        new Map(
          normalizedHeartbeatRecords.map(
            player => [
              player.screen,
              player
            ]
          )
        );

      const playersWithWrongVersion =
        SCREEN_NAMES.filter(
          screenName => {
            const player =
              heartbeatMap.get(
                screenName
              );

            return (
              player &&
              player.playerVersion &&
              player.playerVersion !==
                EXPECTED_PLAYER_VERSION
            );
          }
        );

      const playersWithUnknownVersion =
        SCREEN_NAMES.filter(
          screenName => {
            const player =
              heartbeatMap.get(
                screenName
              );

            return (
              !player ||
              !player.playerVersion
            );
          }
        );

      checks.push({
        level:
          playersWithWrongVersion.length > 0
            ? "blocked"
            : playersWithUnknownVersion.length > 0
              ? "warning"
              : "ok",

        icon:
          playersWithWrongVersion.length > 0
            ? "🔴"
            : playersWithUnknownVersion.length > 0
              ? "🟠"
              : "✅",

        title:
          "Player version compliance",

        detail:
          playersWithWrongVersion.length > 0
            ? `Outdated player version on: ${playersWithWrongVersion.join(", ")}.`
            : playersWithUnknownVersion.length > 0
              ? `No player version has been received yet from: ${playersWithUnknownVersion.join(", ")}. Open the new heartbeat-enabled index.html on each screen once.`
              : `Every player reports ${EXPECTED_PLAYER_VERSION}.`
      });

      const quietHours =
        typeof isPlayerQuietHours === "function"
          ? isPlayerQuietHours()
          : false;

      const unavailablePlayers =
        SCREEN_NAMES.filter(
          screenName => {
            if (quietHours) {
              return false;
            }

            const player =
              heartbeatMap.get(
                screenName
              );

            return (
              !player ||
              player.status === "offline"
            );
          }
        );

      checks.push({
        level:
          quietHours ||
          unavailablePlayers.length === 0
            ? "ok"
            : "warning",

        icon:
          quietHours
            ? "🌙"
            : unavailablePlayers.length === 0
              ? "✅"
              : "🟠",

        title:
          "Player heartbeat",

        detail:
          quietHours
            ? "Quiet hours are active; sleeping players are expected."
            : unavailablePlayers.length === 0
              ? "All configured players have checked in."
              : `No recent heartbeat from: ${unavailablePlayers.join(", ")}.`
      });

      const savedAt =
        dashboardOfflineSnapshot &&
        dashboardOfflineSnapshot.savedAt
          ? new Date(
              dashboardOfflineSnapshot.savedAt
            )
          : null;

      const snapshotValid =
        savedAt &&
        Number.isFinite(
          savedAt.getTime()
        ) &&
        Date.now() -
          savedAt.getTime() <=
          DASHBOARD_OFFLINE_MAX_AGE_MS;

      checks.push({
        level:
          snapshotValid
            ? "ok"
            : "warning",

        icon:
          snapshotValid
            ? "✅"
            : "🟠",

        title:
          "Offline recovery snapshot",

        detail:
          snapshotValid
            ? `Recovery snapshot available (${formatOfflineSnapshotAge(savedAt)}).`
            : "No recent offline recovery snapshot is available."
      });

      return checks;
    }


    function renderGoLiveReadiness(
      checks
    ) {
      const blocked =
        checks.filter(
          check =>
            check.level === "blocked"
        ).length;

      const warnings =
        checks.filter(
          check =>
            check.level === "warning"
        ).length;

      let stateClass =
        "go-live-ready";

      let stateText =
        "Ready";

      let headline =
        "Ready for controlled testing";

      let description =
        "No blocking issues were detected. Start with one test screen before restoring every store display.";

      if (warnings > 0) {
        stateClass =
          "go-live-warning";

        stateText =
          "Review";

        headline =
          "Ready with observations";

        description =
          `${warnings} warning(s) should be reviewed before a full rollout.`;
      }

      if (blocked > 0) {
        stateClass =
          "go-live-blocked";

        stateText =
          "Blocked";

        headline =
          "Not ready for rollout";

        description =
          `${blocked} blocking issue(s) must be corrected first.`;
      }

      goLiveReadinessState.className =
        `go-live-readiness-state ${stateClass}`;

      goLiveReadinessState.textContent =
        stateText;

      goLiveReadinessHeadline.textContent =
        headline;

      goLiveReadinessDescription.textContent =
        description;

      goLiveReadinessList.innerHTML =
        checks
          .map(
            check => `
              <div class="go-live-readiness-item">
                <div class="go-live-readiness-icon">
                  ${escapeHtml(check.icon)}
                </div>

                <div>
                  <div class="go-live-readiness-title">
                    ${escapeHtml(check.title)}
                  </div>

                  <div class="go-live-readiness-detail">
                    ${escapeHtml(check.detail)}
                  </div>
                </div>
              </div>
            `
          )
          .join("");
    }


    /*
     * =====================================================
     * GENERAL HELPERS
     * =====================================================
     */

    function normalizeOptionalDashboardTime(
      value
    ) {
      if (
        value === undefined ||
        value === null ||
        String(value).trim() === ""
      ) {
        return "";
      }

      const time =
        String(value).trim();

      return /^([01]\d|2[0-3]):[0-5]\d$/
        .test(time)
          ? time
          : "";
    }


    function formatManagerTimeInput(value) {
      const digits =
        String(value)
          .replace(/\D/g, "")
          .slice(0, 4);

      if (digits.length <= 2) {
        return digits;
      }

      return (
        digits.slice(0, 2) +
        ":" +
        digits.slice(2)
      );
    }


    function getCurrentHHMM(date) {
      return (
        String(date.getHours()).padStart(2, "0") +
        ":" +
        String(date.getMinutes()).padStart(2, "0")
      );
    }

    function timeToMinutes(time) {
      const parts =
        String(time).split(":");

      return (
        Number(parts[0]) * 60 +
        Number(parts[1])
      );
    }

    function formatDuration(milliseconds) {
      const safeMilliseconds =
        Math.max(0, milliseconds);

      const totalSeconds =
        Math.floor(
          safeMilliseconds / 1000
        );

      const hours =
        Math.floor(
          totalSeconds / 3600
        );

      const minutes =
        Math.floor(
          (totalSeconds % 3600) / 60
        );

      const seconds =
        totalSeconds % 60;

      if (hours > 0) {
        return (
          `${hours}h ` +
          `${String(minutes).padStart(2, "0")}m ` +
          `${String(seconds).padStart(2, "0")}s`
        );
      }

      return (
        `${minutes}m ` +
        `${String(seconds).padStart(2, "0")}s`
      );
    }

    function formatLocalClock(date) {
      return date.toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }
      );
    }

    function buildImageUrl(filename) {
      return String(filename)
        .split("/")
        .map(part =>
          encodeURIComponent(part)
        )
        .join("/");
    }

    function createSafeId(value) {
      return String(value)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    /*
     * =====================================================
     * EVENTS AND STARTUP
     * =====================================================
     */

    window.addEventListener(
      "message",
      handleScheduleSaveMessage
    );

    window.addEventListener(
      "message",
      handleHealthAdminMessage
    );

    refreshButton.addEventListener(
      "click",
      refreshDashboard
    );

    themeButton.addEventListener(
      "click",
      cycleThemePreference
    );

    homeTab.addEventListener(
      "click",
      function() {
        openWorkspace("home");
      }
    );

    controlCenterTab.addEventListener(
      "click",
      function() {
        openWorkspace("control");
      }
    );

    scheduleManagerTab.addEventListener(
      "click",
      function() {
        openWorkspace("manager");
      }
    );

    holidayManagerTab.addEventListener(
      "click",
      function() {
        openWorkspace("holiday");
      }
    );

    backupHistoryTab.addEventListener(
      "click",
      function() {
        openWorkspace("backups");
      }
    );

    imageLibraryTab.addEventListener(
      "click",
      function() {
        openWorkspace("images");
      }
    );

    auditLogTab.addEventListener(
      "click",
      function() {
        openWorkspace("audit");
      }
    );

    holidayCalendarTab.addEventListener(
      "click",
      function() {
        openWorkspace("calendar");
      }
    );

    compatibilityAuditTab.addEventListener(
      "click",
      function() {
        openWorkspace(
          "compatibility"
        );
      }
    );

    dailyScheduleCalendarTab.addEventListener(
      "click",
      function() {
        openWorkspace(
          "dailyCalendar"
        );
      }
    );

    systemHealthTab.addEventListener(
      "click",
      function() {
        openWorkspace(
          "systemHealth"
        );
      }
    );

    reloadManagerButton.addEventListener(
      "click",
      function() {
        refreshDashboard();

        setTimeout(
          updateScheduleManager,
          800
        );
      }
    );

    applyDashboardBrand();
    applyThemePreference();

    createScreenCards();
    setupScheduleManager();

    simulatorTimeInput.value =
      getCurrentHHMM(
        new Date()
      );

    setupHolidayManager();
    setupBackupHistory();
    setupImageLibrary();
    setupGitHubImagePicker();
    setupAuditLog();
    setupHolidayCalendar();
    setupCompatibilityAudit();
    setupDailyScheduleCalendar();
    setupSystemHealth();
    initializeDraftRecovery();
    initializeScheduleTemplates();
    setupMissionQuickActions();

    openWorkspace("home");
    refreshDashboard();
    updateOperationsPanel();

    setInterval(
      refreshDashboard,
      DATA_REFRESH_MS
    );

    setInterval(
      function() {
        updateLiveInformation();
        updateOperationsPanel();

        if (
          getSavedThemePreference() ===
          "auto"
        ) {
          applyThemePreference();
        }
      },
      LIVE_UPDATE_MS
    );
