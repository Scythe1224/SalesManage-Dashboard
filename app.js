// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  DATA
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
let CLIENTS = [
  {opid:"CDNPL",status:"Blocked",product:"CNMS Onnet",productType:"Standard",sheet:"NEW",onboardingDate:"2025-12-01",billingEffective:"2025-12-01",rate:1.0,minBilling:1000,period:3,salesDeal:"1Ã—1000Ã—3+Tax",freeSMS:null,baseAmount:1000,tax:180,monthlyBill:1180},
  {opid:"GENTR",status:"Active",product:"CNMS Onnet",productType:"Standard",sheet:"NEW",onboardingDate:"2025-12-12",billingEffective:"2025-12-24",rate:1.0,minBilling:1000,period:3,salesDeal:"1Ã—1000Ã—3+Tax",freeSMS:null,baseAmount:1000,tax:180,monthlyBill:1180},
  {opid:"VENU",status:"Active",product:"CNMS Onnet",productType:"Pro",sheet:"NEW",onboardingDate:"2025-12-30",billingEffective:"2026-01-09",rate:2.0,minBilling:500,period:6,salesDeal:"2Ã—500Ã—6+Tax",freeSMS:"2 (WA)",baseAmount:1000,tax:180,monthlyBill:1180},
  {opid:"MCAN",status:"Active",product:"CNMS Onnet",productType:"Standard",sheet:"NEW",onboardingDate:"2025-12-31",billingEffective:"2026-01-01",rate:2.0,minBilling:500,period:12,salesDeal:"2Ã—500Ã—12+Tax",freeSMS:"2 (WA)",baseAmount:1000,tax:180,monthlyBill:1180},
  {opid:"SCABN",status:"Active",product:"CNMS Onnet",productType:"Pro",sheet:"NEW",onboardingDate:"2026-01-29",billingEffective:"2026-02-02",rate:1.5,minBilling:500,period:12,salesDeal:"1.5Ã—500Ã—12+Tax",freeSMS:"1 (WA)",baseAmount:750,tax:135,monthlyBill:885},
  {opid:"KDIN",status:"Active",product:"CNMS Onnet",productType:"Standard",sheet:"NEW",onboardingDate:"2026-02-17",billingEffective:"2026-02-23",rate:1.5,minBilling:500,period:12,salesDeal:"1.5Ã—500Ã—12+Tax",freeSMS:"2 (WA)",baseAmount:750,tax:135,monthlyBill:885},
  {opid:"GUJFI",status:"Active",product:"CNMS Onnet",productType:"Pro",sheet:"NEW",onboardingDate:"2026-02-19",billingEffective:"2026-02-24",rate:1.5,minBilling:500,period:12,salesDeal:"1.5Ã—500Ã—12+Tax",freeSMS:"1 (WA)",baseAmount:750,tax:135,monthlyBill:885},
  {opid:"HITCAB",status:"Active",product:"CNMS Onnet",productType:"Pro",sheet:"NEW",onboardingDate:"2026-03-13",billingEffective:"2026-03-17",rate:1.5,minBilling:500,period:12,salesDeal:"1.5Ã—500Ã—12+Tax",freeSMS:"1 (WA)",baseAmount:750,tax:135,monthlyBill:885},
  {opid:"YASHIKA",status:"Active",product:"CNMS Onnet",productType:"Pro",sheet:"NEW",onboardingDate:"2026-04-02",billingEffective:"2026-04-03",rate:1.5,minBilling:500,period:6,salesDeal:"1.5Ã—500Ã—6+Tax",freeSMS:"2 (WA)",baseAmount:750,tax:135,monthlyBill:885},
  {opid:"NCN",status:"Active",product:"CNMS Onnet",productType:"Standard",sheet:"ReActivation",onboardingDate:"2026-02-02",billingEffective:"2026-02-12",rate:1.0,minBilling:1000,period:6,salesDeal:"1Ã—1000Ã—6+Tax",freeSMS:null,baseAmount:1000,tax:180,monthlyBill:1180},
  {opid:"Harsh",status:"Active",product:"CNMS Onnet",productType:"Standard",sheet:"ReActivation",onboardingDate:"2026-02-02",billingEffective:"2026-02-04",rate:1.5,minBilling:500,period:6,salesDeal:"1.5Ã—500Ã—6+Tax",freeSMS:"2 (WA)",baseAmount:750,tax:135,monthlyBill:885},
  {opid:"BCT",status:"Under-Deployment",product:"CNMS Onnet",productType:"Pro",sheet:"ReActivation",onboardingDate:"2026-04-20",billingEffective:null,rate:1.5,minBilling:500,period:6,salesDeal:"1.5Ã—500Ã—6+Tax",freeSMS:null,baseAmount:750,tax:135,monthlyBill:885},
  {opid:"SPEEDNET",status:"Under-Deployment",product:"NetManazer",productType:"ISP",sheet:"NetManazer",onboardingDate:"2026-03-26",billingEffective:null,rate:6,minBilling:250,period:6,salesDeal:"6Ã—250Ã—6+Tax",freeSMS:null,baseAmount:1500,tax:270,monthlyBill:1770},
  {opid:"CITYNET",status:"Under-Deployment",product:"NetManazer",productType:"ISP",sheet:"NetManazer",onboardingDate:"2026-04-09",billingEffective:null,rate:4,minBilling:500,period:6,salesDeal:"4Ã—500Ã—6+Tax",freeSMS:null,baseAmount:2000,tax:360,monthlyBill:2360},
  {opid:"IPTV01",status:"Active",product:"IPTV",productType:"IPTV",sheet:"NEW",onboardingDate:"2026-04-05",billingEffective:"2026-04-08",rate:3,minBilling:400,period:1,salesDeal:"3Ã—400Ã—1+Tax",freeSMS:null,baseAmount:1200,tax:216,monthlyBill:1416},
  {opid:"IPTV02",status:"Under-Deployment",product:"IPTV",productType:"IPTV",sheet:"NEW",onboardingDate:"2026-04-18",billingEffective:null,rate:2.5,minBilling:350,period:3,salesDeal:"2.5Ã—350Ã—3+Tax",freeSMS:null,baseAmount:875,tax:158,monthlyBill:1033}
];

const PRODUCT_META = {
  'NetManazer': { tab:'netmanazer', badgeClass:'prod-tag-net', label:'âš¡ NetManazer' },
  'CNMS Onnet': { tab:'cnms', badgeClass:'prod-tag-cnms', label:'ðŸ“¡ CNMS Onnet' },
  'IPTV': { tab:'iptv', badgeClass:'prod-tag-iptv', label:'ðŸ“º IPTV' }
};

const AUTH_CONFIG = {
  userId: 'kunal',
  password: 'Reli@123'
};
const AUTH_SESSION_KEY = 'intellidata-dashboard-auth-user';
const AUTH_USERS_KEY = 'intellidata-dashboard-users';
const PERMISSION_OPTIONS = [
  { key:'dashboard', label:'Dashboard', help:'Overview page and charts' },
  { key:'clients.view', label:'Clients', help:'Open the clients page and list' },
  { key:'clients.add', label:'Add Client', help:'Use the add client action' },
  { key:'clients.status', label:'Update Status', help:'Change client deployment status' },
  { key:'clients.deal', label:'Client Deal', help:'Edit client pricing and contract details' },
  { key:'clients.delete', label:'Delete Client', help:'Delete client entries' },
  { key:'billing', label:'Billing', help:'Access billing summary' },
  { key:'reports', label:'Reports', help:'Access reports page' },
  { key:'guide', label:'Update Guide', help:'Access GitHub update guide' }
];
const DEFAULT_USER_PERMISSIONS = ['dashboard'];

// â”€â”€ STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let currentTab='all', clientStatusFilter='all', clientSort='opid';
let lastAddedClient=null;
let statusChangeTarget=null;
let selectedNewStatus=null;
let editDealTarget=null;
let currentUser=null;

// â”€â”€ HELPERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function normalizeClient(client){
  if(!client.productType && client.plan) client.productType = client.plan;
  if(client.product === 'NetManazer') client.productType = 'ISP';
  if(client.product === 'IPTV') client.productType = 'IPTV';
  return client;
}
CLIENTS = CLIENTS.map(normalizeClient);

function fmtDate(v){
  if(!v) return 'â€”';
  const d=new Date(v);
  if(Number.isNaN(d.getTime())) return v;
  return d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
}
function statusBadge(status){
  const cls=status==='Active'?'badge-active':status==='Blocked'?'badge-blocked':'badge-deploy';
  return `<span class="badge ${cls}"><span class="badge-dot"></span>${status}</span>`;
}
function getProductTypeDisplay(client){
  if(client.product==='NetManazer') return 'ISP';
  if(client.product==='IPTV') return 'IPTV';
  return client.productType || 'Standard';
}
function getProductTypeClass(client){
  const val=getProductTypeDisplay(client);
  if(val==='Standard') return 'product-type-std';
  if(val==='Pro') return 'product-type-pro';
  if(val==='IPTV') return 'product-type-iptv';
  return 'product-type-fixed';
}
function formatPeriod(period){
  period = Number(period || 0);
  return period === 1 ? 'Monthly' : `${period} Months`;
}
function getProductBadge(client){
  const meta = PRODUCT_META[client.product] || PRODUCT_META['CNMS Onnet'];
  return `<span class="prod-tag ${meta.badgeClass}">${meta.label}</span>`;
}
function getFilteredClientsByTab(tab=currentTab){
  if(tab==='netmanazer') return CLIENTS.filter(c=>c.product==='NetManazer');
  if(tab==='cnms') return CLIENTS.filter(c=>c.product==='CNMS Onnet');
  if(tab==='iptv') return CLIENTS.filter(c=>c.product==='IPTV');
  return [...CLIENTS];
}
function getBase(){
  return getFilteredClientsByTab(currentTab);
}
function getProductStatusChartData(){
  const scoped = getBase();
  const rows = [
    { key:'NetManazer', product:'NetManazer' },
    { key:'CNMS', product:'CNMS Onnet' },
    { key:'IPTV', product:'IPTV' }
  ].map(item=>({
    key:item.key,
    product:item.product,
    active:scoped.filter(c=>c.product===item.product && c.status==='Active').length,
    deploy:scoped.filter(c=>c.product===item.product && c.status==='Under-Deployment').length
  }));
  return currentTab==='all' ? rows : rows.filter(r=>r.product===getBase()[0]?.product || (currentTab==='netmanazer' && r.product==='NetManazer') || (currentTab==='cnms' && r.product==='CNMS Onnet') || (currentTab==='iptv' && r.product==='IPTV'));
}
function calcBilling(rate,minBilling,period){
  const base = Math.round((rate*minBilling) * 100) / 100;
  const tax = Math.round(base * 0.18);
  const monthlyBill = Math.round(base + tax);
  return {
    base,
    tax,
    monthlyBill,
    salesDeal:`${rate}Ã—${minBilling}Ã—${period}+Tax`
  };
}

function getDefaultUsers(){
  return [{
    userId: AUTH_CONFIG.userId,
    password: AUTH_CONFIG.password,
    isAdmin: true,
    permissions: PERMISSION_OPTIONS.map(option=>option.key)
  }];
}
function getStoredUsers(){
  try{
    const raw=localStorage.getItem(AUTH_USERS_KEY);
    if(!raw) return getDefaultUsers();
    const parsed=JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : getDefaultUsers();
  }catch(_err){
    return getDefaultUsers();
  }
}
function setStoredUsers(users){
  try{
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
  }catch(_err){
    // ignore storage failures
  }
}
function ensureSeedUsers(){
  const users=getStoredUsers();
  if(!users.some(user=>user.userId===AUTH_CONFIG.userId)){
    users.unshift(getDefaultUsers()[0]);
    setStoredUsers(users);
  }
}
function getUserById(userId){
  return getStoredUsers().find(user=>user.userId===userId) || null;
}
function userHasPermission(permissionKey, user=currentUser){
  if(!user) return false;
  if(user.isAdmin) return true;
  return Array.isArray(user.permissions) && user.permissions.includes(permissionKey);
}
function hasAnyClientAccess(user=currentUser){
  return ['clients.view','clients.add','clients.status','clients.deal','clients.delete'].some(key=>userHasPermission(key, user));
}
function getFirstAccessiblePage(user=currentUser){
  if(userHasPermission('dashboard', user)) return 'dashboard';
  if(hasAnyClientAccess(user)) return 'clients';
  if(userHasPermission('billing', user)) return 'billing';
  if(userHasPermission('reports', user)) return 'reports';
  if(userHasPermission('guide', user)) return 'github';
  return 'dashboard';
}

function getStoredAuthUser(){
  try{
    return sessionStorage.getItem(AUTH_SESSION_KEY);
  }catch(_err){
    return null;
  }
}
function getActivePassword(){
  return currentUser?.password || AUTH_CONFIG.password;
}
function setActivePassword(password){
  if(!currentUser) return;
  const users=getStoredUsers().map(user=>user.userId===currentUser.userId ? { ...user, password } : user);
  setStoredUsers(users);
  currentUser=getUserById(currentUser.userId);
}
function setStoredAuthUser(userId){
  try{
    if(userId) sessionStorage.setItem(AUTH_SESSION_KEY, userId);
    else sessionStorage.removeItem(AUTH_SESSION_KEY);
  }catch(_err){
    // local preview can block storage in some cases
  }
}
function setDashboardAccess(isAuthenticated, userId=''){
  const loginShell=document.getElementById('loginShell');
  const dashboardApp=document.getElementById('dashboardApp');
  const loginError=document.getElementById('loginError');
  const sessionUserChip=document.getElementById('sessionUserChip');
  const manageUsersBtn=document.getElementById('manageUsersBtn');
  if(loginShell) loginShell.hidden=isAuthenticated;
  if(dashboardApp) dashboardApp.hidden=!isAuthenticated;
  if(loginError) loginError.hidden=true;
  if(sessionUserChip) sessionUserChip.textContent=`User: ${userId || AUTH_CONFIG.userId}`;
  if(manageUsersBtn) manageUsersBtn.hidden=!(currentUser && currentUser.isAdmin);
  if(isAuthenticated) applyPermissionVisibility();
}
function initializeLogin(){
  ensureSeedUsers();
  const loginForm=document.getElementById('loginForm');
  const loginUserId=document.getElementById('loginUserId');
  const loginPassword=document.getElementById('loginPassword');
  const loginError=document.getElementById('loginError');
  const storedUser=getStoredAuthUser();

  if(storedUser && getUserById(storedUser)){
    currentUser=getUserById(storedUser);
    setDashboardAccess(true, storedUser);
    setActivePage(getFirstAccessiblePage());
  }else{
    currentUser=null;
    setDashboardAccess(false);
    if(loginUserId) loginUserId.focus();
  }

  if(loginForm){
    loginForm.addEventListener('submit',event=>{
      event.preventDefault();
      const userId=(loginUserId?.value || '').trim();
      const password=loginPassword?.value || '';
      const matchedUser=getUserById(userId);
      if(!matchedUser || matchedUser.password!==password){
        if(loginError) loginError.hidden=false;
        if(loginPassword) loginPassword.value='';
        if(loginPassword) loginPassword.focus();
        return;
      }
      currentUser=matchedUser;
      setStoredAuthUser(userId);
      setDashboardAccess(true, userId);
      loginForm.reset();
      setActivePage(getFirstAccessiblePage());
      showToast('Login successful');
    });
  }
  renderPermissionControls();
}
function logoutDashboard(){
  setStoredAuthUser('');
  currentUser=null;
  setDashboardAccess(false);
  closePasswordModal();
  closeUserManagerModal();
  closeClientsFlyout();
  const loginUserId=document.getElementById('loginUserId');
  const loginPassword=document.getElementById('loginPassword');
  if(loginUserId) loginUserId.value='';
  if(loginPassword) loginPassword.value='';
  if(loginUserId) loginUserId.focus();
  showToast('Logged out successfully');
}
function openPasswordModal(){
  const backdrop=document.getElementById('passwordBackdrop');
  const passwordError=document.getElementById('passwordError');
  if(passwordError) passwordError.hidden=true;
  if(backdrop) backdrop.classList.add('open');
  const currentPasswordInput=document.getElementById('currentPasswordInput');
  const newPasswordInput=document.getElementById('newPasswordInput');
  const confirmPasswordInput=document.getElementById('confirmPasswordInput');
  if(currentPasswordInput) currentPasswordInput.value='';
  if(newPasswordInput) newPasswordInput.value='';
  if(confirmPasswordInput) confirmPasswordInput.value='';
  if(currentPasswordInput) currentPasswordInput.focus();
}
function closePasswordModal(){
  const backdrop=document.getElementById('passwordBackdrop');
  if(backdrop) backdrop.classList.remove('open');
}
function changeDashboardPassword(){
  const currentPasswordInput=document.getElementById('currentPasswordInput');
  const newPasswordInput=document.getElementById('newPasswordInput');
  const confirmPasswordInput=document.getElementById('confirmPasswordInput');
  const passwordError=document.getElementById('passwordError');
  const currentPassword=currentPasswordInput?.value || '';
  const newPassword=newPasswordInput?.value || '';
  const confirmPassword=confirmPasswordInput?.value || '';

  if(passwordError) passwordError.hidden=true;
  if(!currentUser || currentPassword!==getActivePassword()){
    if(passwordError){
      passwordError.textContent='Current password is incorrect.';
      passwordError.hidden=false;
    }
    return;
  }
  if(newPassword.length<6){
    if(passwordError){
      passwordError.textContent='New password must be at least 6 characters.';
      passwordError.hidden=false;
    }
    return;
  }
  if(newPassword!==confirmPassword){
    if(passwordError){
      passwordError.textContent='New password and confirm password do not match.';
      passwordError.hidden=false;
    }
    return;
  }
  setActivePassword(newPassword);
  closePasswordModal();
  showToast('Password updated successfully');
}

function renderPermissionControls(){
  const grid=document.getElementById('createPermissionGrid');
  if(!grid) return;
  grid.innerHTML=PERMISSION_OPTIONS.map(option=>`
    <label class="permission-item">
      <input type="checkbox" data-create-permission="${option.key}" ${DEFAULT_USER_PERMISSIONS.includes(option.key)?'checked':''}/>
      <span class="permission-copy">
        <span class="permission-label">${option.label}</span>
        <span class="permission-help">${option.help}</span>
      </span>
    </label>
  `).join('');
}
function getSelectedCreatePermissions(){
  return Array.from(document.querySelectorAll('[data-create-permission]'))
    .filter(input=>input.checked)
    .map(input=>input.getAttribute('data-create-permission'));
}
function renderUserList(){
  const userList=document.getElementById('userList');
  if(!userList) return;
  const users=getStoredUsers();
  userList.innerHTML=users.map(user=>`
    <div class="user-row">
      <div class="user-row-top">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span class="user-id-badge">${user.userId}</span>
          ${user.isAdmin ? '<span class="user-role-badge">Admin</span>' : ''}
        </div>
      </div>
      <div class="user-permission-grid">
        ${PERMISSION_OPTIONS.map(option=>`
          <label class="permission-item">
            <input type="checkbox" data-user-id="${user.userId}" data-user-permission="${option.key}" ${user.isAdmin || (user.permissions || []).includes(option.key) ? 'checked' : ''} ${user.isAdmin ? 'disabled' : ''}/>
            <span class="permission-copy">
              <span class="permission-label">${option.label}</span>
              <span class="permission-help">${option.help}</span>
            </span>
          </label>
        `).join('')}
      </div>
      ${user.isAdmin ? '' : `
        <div class="user-actions">
          <button class="mini-btn save" type="button" onclick="saveUserPermissions('${user.userId}')">Save Access</button>
          <button class="mini-btn delete" type="button" onclick="deleteDashboardUser('${user.userId}')">Delete User</button>
        </div>
      `}
    </div>
  `).join('');
}
function openUserManagerModal(){
  if(!currentUser || !currentUser.isAdmin){
    showToast('Access denied');
    return;
  }
  const error=document.getElementById('userManagerError');
  if(error) error.hidden=true;
  const userIdInput=document.getElementById('newUserIdInput');
  const passwordInput=document.getElementById('newUserPasswordInput');
  if(userIdInput) userIdInput.value='';
  if(passwordInput) passwordInput.value='';
  renderPermissionControls();
  renderUserList();
  document.getElementById('userManagerBackdrop')?.classList.add('open');
}
function closeUserManagerModal(){
  document.getElementById('userManagerBackdrop')?.classList.remove('open');
}
function createDashboardUser(){
  const error=document.getElementById('userManagerError');
  const userId=(document.getElementById('newUserIdInput')?.value || '').trim();
  const password=document.getElementById('newUserPasswordInput')?.value || '';
  const permissions=getSelectedCreatePermissions();
  if(error) error.hidden=true;
  if(!userId || !password){
    if(error){
      error.textContent='User ID and password are required.';
      error.hidden=false;
    }
    return;
  }
  if(!permissions.length){
    if(error){
      error.textContent='Select at least one permission.';
      error.hidden=false;
    }
    return;
  }
  if(getUserById(userId)){
    if(error){
      error.textContent='That user ID already exists.';
      error.hidden=false;
    }
    return;
  }
  const users=getStoredUsers();
  users.push({ userId, password, isAdmin:false, permissions });
  setStoredUsers(users);
  renderUserList();
  renderPermissionControls();
  document.getElementById('newUserIdInput').value='';
  document.getElementById('newUserPasswordInput').value='';
  showToast('User created successfully');
}
function saveUserPermissions(userId){
  const permissions=Array.from(document.querySelectorAll(`[data-user-id="${userId}"][data-user-permission]`))
    .filter(input=>input.checked)
    .map(input=>input.getAttribute('data-user-permission'));
  if(!permissions.length){
    showToast('Select at least one permission');
    return;
  }
  const users=getStoredUsers().map(user=>user.userId===userId ? { ...user, permissions } : user);
  setStoredUsers(users);
  if(currentUser && currentUser.userId===userId){
    currentUser=getUserById(userId);
    applyPermissionVisibility();
    setActivePage(getFirstAccessiblePage());
  }
  showToast('Permissions updated');
}
function deleteDashboardUser(userId){
  const users=getStoredUsers().filter(user=>user.userId!==userId);
  setStoredUsers(users);
  renderUserList();
  showToast('User deleted');
}
function applyPermissionVisibility(){
  const map = {
    navDashboard: userHasPermission('dashboard'),
    clientsFlyoutWrap: hasAnyClientAccess(),
    navBilling: userHasPermission('billing'),
    navReports: userHasPermission('reports'),
    navGuide: userHasPermission('guide'),
    clientsViewItem: userHasPermission('clients.view'),
    clientsAddItem: userHasPermission('clients.add'),
    clientsStatusItem: userHasPermission('clients.status'),
    clientsDealItem: userHasPermission('clients.deal')
  };
  Object.entries(map).forEach(([id, visible])=>{
    const element=document.getElementById(id);
    if(element) element.hidden=!visible;
  });
}
function setActivePage(id){
  const navMap = {
    dashboard: document.getElementById('navDashboard'),
    clients: document.getElementById('clientsNavIcon'),
    billing: document.getElementById('navBilling'),
    reports: document.getElementById('navReports'),
    github: document.getElementById('navGuide')
  };
  showPage(id, navMap[id] || null);
}
function requirePermission(permissionKey, message='Access denied'){
  if(userHasPermission(permissionKey)) return true;
  showToast(message);
  return false;
}

// â”€â”€ DATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function updateDate(){
  const now=new Date();
  const fmt=d=>d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
  document.getElementById('liveDateBadge').textContent=fmt(now);
  const a=new Date(now); a.setDate(now.getDate()-10);
  const b=new Date(now); b.setDate(now.getDate()+10);
  document.getElementById('kpi-from').textContent=fmt(a);
  document.getElementById('kpi-to').textContent=fmt(b);
}
updateDate();

// â”€â”€ PAGE NAVIGATION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function showPage(id,el){
  const pagePermissionMap = {
    dashboard:'dashboard',
    clients:'clients.view',
    billing:'billing',
    reports:'reports',
    github:'guide'
  };
  const requiredPermission=pagePermissionMap[id];
  if(requiredPermission && !userHasPermission(requiredPermission) && !(id==='clients' && hasAnyClientAccess())){
    showToast('Access denied');
    return;
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active-page'));
  document.getElementById('page-'+id).classList.add('active-page');
  document.querySelectorAll('.nav-icon').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  if(id==='clients') renderClientsTable();
  if(id==='billing') renderBillingPage();
}
function showSubTab(el){
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}
function switchTab(tab,el){
  currentTab=tab;
  document.querySelectorAll('.prod-tab').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  renderAll();
  if(document.getElementById('page-clients').classList.contains('active-page')) renderClientsTable();
  if(document.getElementById('page-billing').classList.contains('active-page')) renderBillingPage();
}

function openAddClientFromSidebar(){
  if(!requirePermission('clients.add')) return;
  closeClientsFlyout();
  showPage('clients', document.getElementById('clientsNavIcon'));
  window.setTimeout(()=>{
    openAddModal();
  }, 60);
}

// â”€â”€ SIDEBAR FLYOUT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function toggleClientsFlyout(event){
  event.stopPropagation();
  const wrap = document.getElementById('clientsFlyoutWrap');
  const btn = document.getElementById('clientsNavIcon');
  const isOpen = wrap.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));
}
function closeClientsFlyout(){
  const wrap = document.getElementById('clientsFlyoutWrap');
  const btn = document.getElementById('clientsNavIcon');
  if(wrap){
    wrap.classList.remove('open');
    if(btn) btn.setAttribute('aria-expanded', 'false');
  }
}
document.addEventListener('click',e=>{
  const wrap=document.getElementById('clientsFlyoutWrap');
  if(wrap && !wrap.contains(e.target)) closeClientsFlyout();
});

// â”€â”€ KPI â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function updateKPI(){
  const base=getBase();
  const act=base.filter(c=>c.status==='Active');
  const dep=base.filter(c=>c.status==='Under-Deployment');
  const blk=base.filter(c=>c.status==='Blocked');

  document.getElementById('kpi-active').textContent=act.length;
  document.getElementById('kpi-deploy').textContent=dep.length;
  document.getElementById('kpi-blocked').textContent=blk.length;

  document.getElementById('k-ac-cnms').textContent=act.filter(c=>c.product==='CNMS Onnet').length;
  document.getElementById('k-ac-net').textContent=act.filter(c=>c.product==='NetManazer').length;
  document.getElementById('k-dp-cnms').textContent=dep.filter(c=>c.product==='CNMS Onnet').length;
  document.getElementById('k-dp-net').textContent=dep.filter(c=>c.product==='NetManazer').length;
  document.getElementById('k-bl-cnms').textContent=blk.filter(c=>c.product==='CNMS Onnet').length;
  document.getElementById('k-bl-net').textContent=blk.filter(c=>c.product==='NetManazer').length;

  const rev=act.reduce((s,c)=>s+c.monthlyBill,0);
  document.getElementById('inf-rev').textContent=rev.toLocaleString('en-IN');

  const allNet=CLIENTS.filter(c=>c.product==='NetManazer');
  const allCNMS=CLIENTS.filter(c=>c.product==='CNMS Onnet');
  const allIPTV=CLIENTS.filter(c=>c.product==='IPTV');

  document.getElementById('inf-net').innerHTML=`${allNet.length} <span style="color:#94a3b8;font-size:14px">clients</span>`;
  document.getElementById('inf-cnms').innerHTML=`${allCNMS.length} <span style="color:#94a3b8;font-size:14px">clients</span>`;
  document.getElementById('inf-iptv').innerHTML=`${allIPTV.length} <span style="color:#94a3b8;font-size:14px">clients</span>`;

  document.getElementById('inf-net-dep').textContent=allNet.filter(c=>c.status==='Under-Deployment').length;
  document.getElementById('inf-net-act').textContent=allNet.filter(c=>c.status==='Active').length;
  document.getElementById('inf-cnms-act').textContent=allCNMS.filter(c=>c.status==='Active').length;
  document.getElementById('inf-cnms-bl').textContent=allCNMS.filter(c=>c.status==='Blocked').length;
  document.getElementById('inf-iptv-dep').textContent=allIPTV.filter(c=>c.status==='Under-Deployment').length;
  document.getElementById('inf-iptv-act').textContent=allIPTV.filter(c=>c.status==='Active').length;
}

// â”€â”€ BAR CHART â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderBarChart(){
  const chart=document.getElementById('barChart');
  const xl=document.getElementById('barXLabels');
  const allRows=getProductStatusChartData();
  const rows=currentTab==='all'
    ? allRows
    : allRows.filter(row=>
        (currentTab==='netmanazer' && row.key==='NetManazer') ||
        (currentTab==='cnms' && row.key==='CNMS') ||
        (currentTab==='iptv' && row.key==='IPTV')
      );
  const maxTotal=Math.max(...rows.map(r=>r.active+r.deploy),1);

  chart.innerHTML='';
  xl.innerHTML='';

  rows.forEach(row=>{
    const grp=document.createElement('div');
    grp.className='bar-group';

    const total=row.active+row.deploy;
    const totalHeight = total ? Math.max((total/maxTotal)*126, 38) : 8;
    const activeHeight = row.active ? Math.max((row.active/Math.max(total,1))*totalHeight, 18) : 0;
    const deployHeight = row.deploy ? Math.max((row.deploy/Math.max(total,1))*totalHeight, 18) : 0;

    grp.innerHTML=`
      <div class="chart-values">
        <span class="chart-value-pill active">${row.active}</span>
        <span class="chart-value-pill deploy">${row.deploy}</span>
      </div>
      <div class="chart-stack" title="${row.key} â€” Active: ${row.active}, Under-Deployment: ${row.deploy}">
        ${row.deploy ? `<div class="chart-bar deploy" style="height:${deployHeight}px"></div>` : '<div class="chart-bar deploy empty"></div>'}
        ${row.active ? `<div class="chart-bar active" style="height:${activeHeight}px"></div>` : '<div class="chart-bar active empty"></div>'}
      </div>
    `;
    chart.appendChild(grp);

    const x=document.createElement('div');
    x.style.cssText=`flex:${currentTab==='all'?'1':'0 0 120px'};text-align:center;font-size:11px;font-weight:800;color:#64748b`;
    x.textContent=row.key;
    xl.appendChild(x);
  });
}

// â”€â”€ DONUT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderDonut(){
  const base=getBase();
  const net=base.filter(c=>c.product==='NetManazer').length;
  const cnms=base.filter(c=>c.product==='CNMS Onnet').length;
  const iptv=base.filter(c=>c.product==='IPTV').length;
  const total=base.length||1;
  const slices=[
    {label:'CNMS Onnet',val:cnms,color:'#1d4ed8'},
    {label:'NetManazer',val:net,color:'#22c55e'},
    {label:'IPTV',val:iptv,color:'#8b5cf6'}
  ].filter(s=>s.val>0);

  const cx=65,cy=65,r=50,inner=32;
  let angle=-Math.PI/2;
  let paths='';
  slices.forEach(s=>{
    const a=(s.val/total)*2*Math.PI;
    const x1=cx+r*Math.cos(angle),y1=cy+r*Math.sin(angle);
    const x2=cx+r*Math.cos(angle+a),y2=cy+r*Math.sin(angle+a);
    const xi1=cx+inner*Math.cos(angle),yi1=cy+inner*Math.sin(angle);
    const xi2=cx+inner*Math.cos(angle+a),yi2=cy+inner*Math.sin(angle+a);
    const lg=a>Math.PI?1:0;
    paths+=`<path d="M${x1},${y1} A${r},${r} 0 ${lg},1 ${x2},${y2} L${xi2},${yi2} A${inner},${inner} 0 ${lg},0 ${xi1},${yi1} Z" fill="${s.color}" stroke="#fff" stroke-width="2"/>`;
    angle+=a;
  });
  paths+=`<text x="65" y="61" text-anchor="middle" font-family="Rajdhani,sans-serif" font-size="20" font-weight="700" fill="#1e293b">${base.length}</text>`;
  paths+=`<text x="65" y="75" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="#94a3b8" font-weight="600">CLIENTS</text>`;
  document.getElementById('donutSvg').innerHTML=paths;
  document.getElementById('donutLegend').innerHTML=slices.map(s=>`
    <div class="dl-item"><div class="dl-swatch" style="background:${s.color}"></div><span>${s.label}</span><span class="dl-count">${s.val}</span></div>
  `).join('');
}

// â”€â”€ CLIENTS PAGE TABLE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function setCPill(status,el){
  clientStatusFilter=status;
  document.querySelectorAll('.filter-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  renderClientsTable();
}
function getFilteredClients(){
  let d=getFilteredClientsByTab();
  if(clientStatusFilter!=='all') d=d.filter(c=>c.status===clientStatusFilter);
  const q=(document.getElementById('clientSearch')?.value||'').toLowerCase();
  if(q){
    d=d.filter(c=>
      c.opid.toLowerCase().includes(q) ||
      c.product.toLowerCase().includes(q) ||
      getProductTypeDisplay(c).toLowerCase().includes(q) ||
      c.status.toLowerCase().includes(q)
    );
  }
  d.sort((a,b)=>{
    if(clientSort==='date') return new Date(a.onboardingDate)-new Date(b.onboardingDate);
    if(clientSort==='bill') return b.monthlyBill-a.monthlyBill;
    return a.opid.localeCompare(b.opid);
  });
  return d;
}
function renderClientsTable(){
  const data=getFilteredClients();
  const mapLabel = {all:'all clients', netmanazer:'NetManazer clients', cnms:'CNMS Onnet clients', iptv:'IPTV clients'};
  document.getElementById('clientsSubtitle').textContent=
    currentTab==='all' ? `Showing ${data.length} of ${CLIENTS.length} clients` : `Showing ${data.length} ${mapLabel[currentTab] || 'clients'}`;
  const tbody=document.getElementById('clientsTableBody');
  if(!data.length){
    tbody.innerHTML='<tr class="empty-row"><td colspan="12">No clients match the current filter</td></tr>';
    return;
  }
  tbody.innerHTML=data.map(c=>{
    const rowClass = c.product==='NetManazer'?'td-net':c.product==='IPTV'?'td-iptv':'td-cnms';
    return `<tr class="${rowClass}" onclick="openDetailModal('${c.opid}')">
      <td><div class="td-opid">${c.opid}</div>${c.sheet==='ReActivation'?'<span class="sheet-tag">Re-Activation</span>':''}</td>
      <td>${getProductBadge(c)}</td>
      <td><span class="product-type-tag ${getProductTypeClass(c)}">${getProductTypeDisplay(c)}</span></td>
      <td>${statusBadge(c.status)}</td>
      <td style="font-size:12px;font-weight:600">${fmtDate(c.onboardingDate)}</td>
      <td style="font-size:12px;font-weight:600">${fmtDate(c.billingEffective)}</td>
      <td style="font-weight:700">â‚¹${c.rate}</td>
      <td style="font-weight:700">${formatPeriod(c.period)}</td>
      <td style="font-size:11px">${c.freeSMS||'â€”'}</td>
      <td class="td-bill">â‚¹${c.monthlyBill.toLocaleString('en-IN')}</td>
      <td><span class="sheet-tag" style="${c.sheet==='NetManazer'?'background:#f0fdf4;color:#15803d;border-color:#bbf7d0':''}">${c.sheet}</span></td>
      <td>${userHasPermission('clients.delete') ? `<button class="action-btn-delete" onclick="event.stopPropagation();deleteClient('${c.opid}')">Delete</button>` : '<span class="na-text">Restricted</span>'}</td>
    </tr>`;
  }).join('');
}

// â”€â”€ BILLING PAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderBillingPage(){
  const base=getBase();
  const active=base.filter(c=>c.status==='Active').sort((a,b)=>b.monthlyBill-a.monthlyBill);
  const total=active.reduce((s,c)=>s+c.monthlyBill,0);
  document.getElementById('billingContent').innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:18px">
      <div class="info-card cnms-border"><div class="info-card-title">Active Clients</div><div class="info-big">${active.length}</div></div>
      <div class="info-card rev-border"><div class="info-card-title">Monthly Revenue</div><div class="info-big">â‚¹${total.toLocaleString('en-IN')}</div></div>
      <div class="info-card net-border"><div class="info-card-title">Current Filter</div><div class="info-big" style="font-size:22px">${currentTab==='all'?'All Products':currentTab.toUpperCase()}</div></div>
    </div>
    <div class="table-card">
      <div style="overflow-x:auto">
        <table>
          <thead>
            <tr><th>OPID</th><th>Product</th><th>Product Type</th><th>Monthly Bill</th><th>Billing Effective</th></tr>
          </thead>
          <tbody>
            ${active.length ? active.map(c=>`<tr>
              <td><div class="td-opid">${c.opid}</div></td>
              <td>${getProductBadge(c)}</td>
              <td><span class="product-type-tag ${getProductTypeClass(c)}">${getProductTypeDisplay(c)}</span></td>
              <td class="td-bill">â‚¹${c.monthlyBill.toLocaleString('en-IN')}</td>
              <td>${fmtDate(c.billingEffective)}</td>
            </tr>`).join('') : '<tr class="empty-row"><td colspan="5">No active billing records available</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>`;
}

// â”€â”€ DETAIL MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function openDetailModal(opid){
  const c=CLIENTS.find(x=>x.opid===opid);
  if(!c) return;
  const isNet=c.product==='NetManazer';
  document.getElementById('detailHdr').className='modal-hdr'+(isNet?' net':'');
  document.getElementById('detailOpid').textContent=c.opid;
  document.getElementById('detailTags').innerHTML=
    getProductBadge(c).replace('prod-tag','prod-tag').replace('>', ' style="background:rgba(255,255,255,0.2);color:#fff;border-color:rgba(255,255,255,0.3)">') +
    statusBadge(c.status).replace('class="badge ','class="badge ').replace('>', ' style="background:rgba(255,255,255,0.15);color:#fff;border-color:rgba(255,255,255,0.3)">');
  document.getElementById('detailBody').innerHTML=`
    <div class="modal-section-title">Client Details</div>
    <div class="modal-grid">
      <div class="mfield"><div class="mf-label">Product Type</div><div class="mf-val"><span class="product-type-tag ${getProductTypeClass(c)}">${getProductTypeDisplay(c)}</span></div></div>
      <div class="mfield"><div class="mf-label">Sheet</div><div class="mf-val">${c.sheet}</div></div>
      <div class="mfield"><div class="mf-label">Onboarding Date</div><div class="mf-val">${fmtDate(c.onboardingDate)}</div></div>
      <div class="mfield"><div class="mf-label">Billing Effective</div><div class="mf-val">${fmtDate(c.billingEffective)}</div></div>
      <div class="mfield"><div class="mf-label">Rate</div><div class="mf-val">â‚¹${c.rate}</div></div>
      <div class="mfield"><div class="mf-label">Min. Billing (Connection/Subscribers)</div><div class="mf-val">${c.minBilling.toLocaleString('en-IN')}</div></div>
      <div class="mfield"><div class="mf-label">Period</div><div class="mf-val">${formatPeriod(c.period)}</div></div>
      <div class="mfield"><div class="mf-label">Free SMS / WA</div><div class="mf-val">${c.freeSMS||'â€”'}</div></div>
    </div>

    <div class="modal-section-title">Sales Deal</div>
    <button class="sales-deal-btn" onclick="toggleSalesDeal(this)">
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 14l-4-4 4-4"/><path d="M20 20v-7a4 4 0 0 0-4-4H5"/></svg>
      View Sales Deal Formula &amp; Breakdown
      <span style="margin-left:auto;font-size:11px;opacity:0.7" id="sdToggleText">â–¼ Show</span>
    </button>
    <div class="sales-deal-expand" id="salesDealExpand">
      <div class="sales-formula">${c.salesDeal}</div>
      <div class="sales-breakdown">
        <b>Rate:</b> â‚¹${c.rate}<br>
        <b>Min. Billing (Connection/Subscribers):</b> ${c.minBilling.toLocaleString('en-IN')}<br>
        <b>Period:</b> ${formatPeriod(c.period)}<br>
        <b>Base Calculation:</b> â‚¹${c.baseAmount.toLocaleString('en-IN')}<br>
        <b>GST (18%):</b> â‚¹${c.tax.toLocaleString('en-IN')}<br>
        <b>Monthly Bill:</b> â‚¹${c.monthlyBill.toLocaleString('en-IN')}
      </div>
    </div>

    <div class="modal-section-title">Billing Breakdown</div>
    <table class="billing-table">
      <tr><td>Base Amount</td><td>â‚¹${c.baseAmount.toLocaleString('en-IN')}</td></tr>
      <tr><td>GST / Tax (18%)</td><td>â‚¹${c.tax.toLocaleString('en-IN')}</td></tr>
      <tr class="total-row"><td>Monthly Bill</td><td>â‚¹${c.monthlyBill.toLocaleString('en-IN')}</td></tr>
      <tr class="contract-row"><td>Contract Value (${formatPeriod(c.period)})</td><td>â‚¹${(c.monthlyBill*c.period).toLocaleString('en-IN')}</td></tr>
    </table>

    <div class="detail-actions">
      <button class="btn-delete-client" onclick="deleteClient('${c.opid}', true)">Delete Client</button>
    </div>`;
  document.getElementById('detailBackdrop').classList.add('open');
}
function toggleSalesDeal(btn){
  const exp=document.getElementById('salesDealExpand');
  const txt=document.getElementById('sdToggleText');
  const isOpen=exp.classList.toggle('open');
  txt.textContent=isOpen?'â–² Hide':'â–¼ Show';
}
function closeDetailModal(){document.getElementById('detailBackdrop').classList.remove('open')}

// â”€â”€ ADD CLIENT MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function openAddModal(){
  const backdrop=document.getElementById('addBackdrop');
  if(!backdrop) return;
  document.getElementById('githubCopySection').style.display='none';
  const today=new Date().toISOString().split('T')[0];
  document.getElementById('f-ondate').value=today;
  document.getElementById('f-billdate').value='';
  document.getElementById('f-opid').value='';
  document.getElementById('f-rate').value='';
  document.getElementById('f-minbill').value='';
  document.getElementById('f-freesms').value='';
  document.getElementById('f-product').value='CNMS Onnet';
  document.getElementById('f-plan').value='Standard';
  document.getElementById('f-status').value='Under-Deployment';
  document.getElementById('f-sheet').value='NEW';
  document.getElementById('f-period').value='6';
  onProductChange();
  updateFormCalc();
  backdrop.classList.add('open');
}
function closeAddModal(){document.getElementById('addBackdrop').classList.remove('open')}
function onProductChange(){
  const prod=document.getElementById('f-product').value;
  const planGroup=document.getElementById('planGroup');
  const plan=document.getElementById('f-plan');
  const hint=document.getElementById('productTypeHint');
  const sheetSel=document.getElementById('f-sheet');

  if(prod==='NetManazer'){
    plan.value='ISP';
    plan.innerHTML='<option value="ISP">ISP</option>';
    planGroup.style.opacity='0.65';
    planGroup.style.pointerEvents='none';
    if(hint) hint.textContent='Fixed as ISP for NetManazer';
    sheetSel.value='NetManazer';
  } else if(prod==='IPTV'){
    plan.value='IPTV';
    plan.innerHTML='<option value="IPTV">IPTV</option>';
    planGroup.style.opacity='0.65';
    planGroup.style.pointerEvents='none';
    if(hint) hint.textContent='Fixed as IPTV for IPTV product';
    if(sheetSel.value==='NetManazer') sheetSel.value='NEW';
  } else {
    plan.innerHTML='<option value="Standard">Standard</option><option value="Pro">Pro</option>';
    plan.value='Standard';
    planGroup.style.opacity='1';
    planGroup.style.pointerEvents='auto';
    if(hint) hint.textContent='Selectable for CNMS Onnet only';
    if(sheetSel.value==='NetManazer') sheetSel.value='NEW';
  }
  updateFormCalc();
}
function updateFormCalc(){
  const rate=parseFloat(document.getElementById('f-rate')?.value)||0;
  const minBilling=parseInt(document.getElementById('f-minbill')?.value)||0;
  const period=parseInt(document.getElementById('f-period')?.value)||1;
  if(rate>0 && minBilling>0){
    const {base,tax,monthlyBill,salesDeal}=calcBilling(rate,minBilling,period);
    document.getElementById('fp-base').textContent=base.toLocaleString('en-IN');
    document.getElementById('fp-tax').textContent=tax.toLocaleString('en-IN');
    document.getElementById('fp-deal').textContent=salesDeal;
    document.getElementById('fp-bill').textContent=monthlyBill.toLocaleString('en-IN');
  } else {
    document.getElementById('fp-base').textContent='â€”';
    document.getElementById('fp-tax').textContent='â€”';
    document.getElementById('fp-deal').textContent='â€”';
    document.getElementById('fp-bill').textContent='â€”';
  }
}
function saveNewClient(){
  if(!requirePermission('clients.add')) return;
  const opid=document.getElementById('f-opid').value.trim().toUpperCase();
  const product=document.getElementById('f-product').value;
  const productType=product==='NetManazer'?'ISP':product==='IPTV'?'IPTV':document.getElementById('f-plan').value;
  const status=document.getElementById('f-status').value;
  const sheet=document.getElementById('f-sheet').value;
  const onboardingDate=document.getElementById('f-ondate').value;
  const billingEffective=document.getElementById('f-billdate').value || null;
  const rate=parseFloat(document.getElementById('f-rate').value);
  const minBilling=parseInt(document.getElementById('f-minbill').value);
  const period=parseInt(document.getElementById('f-period').value);
  const freeSMS=document.getElementById('f-freesms').value.trim() || null;

  if(!opid || !product || !status || !sheet || !onboardingDate || !rate || !minBilling || !period){
    alert('Please fill all required fields.');
    return;
  }
  if(CLIENTS.some(c=>c.opid===opid)){
    alert('This OPID already exists.');
    return;
  }

  const {base,tax,monthlyBill,salesDeal}=calcBilling(rate,minBilling,period);
  const client = normalizeClient({
    opid,status,product,productType,sheet,onboardingDate,billingEffective,
    rate,minBilling,period,salesDeal,freeSMS,baseAmount:base,tax,monthlyBill
  });
  CLIENTS.push(client);
  lastAddedClient=client;

  const code=`  {opid:"${client.opid}",status:"${client.status}",product:"${client.product}",productType:"${client.productType}",sheet:"${client.sheet}",
   onboardingDate:"${client.onboardingDate}",billingEffective:${client.billingEffective?'"'+client.billingEffective+'"':'null'},
   rate:${client.rate},minBilling:${client.minBilling},period:${client.period},salesDeal:"${client.salesDeal}",
   freeSMS:${client.freeSMS?'"'+client.freeSMS+'"':'null'},baseAmount:${client.baseAmount},tax:${client.tax},monthlyBill:${client.monthlyBill}},`;
  document.getElementById('githubCopyCode').textContent=code;
  document.getElementById('githubCopySection').style.display='block';

  renderAll();
  renderClientsTable();
  renderBillingPage();
  closeAddModal();
  showToast('âœ… Client added successfully');
}
function copyGithubCode(){
  const code=document.getElementById('githubCopyCode').textContent;
  navigator.clipboard.writeText(code).then(()=>showToast('ðŸ“‹ Data block copied'));
}

// â”€â”€ DELETE CLIENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function deleteClient(opid, closeDetail=false){
  if(!requirePermission('clients.delete')) return;
  const client=CLIENTS.find(c=>c.opid===opid);
  if(!client) return;
  const ok=confirm(`Delete client ${opid}? This will remove the record from the current session.`);
  if(!ok) return;
  CLIENTS = CLIENTS.filter(c=>c.opid!==opid);
  if(closeDetail) closeDetailModal();
  renderAll();
  renderClientsTable();
  renderBillingPage();
  showToast(`âœ… ${opid} deleted successfully`);
}

// â”€â”€ TOAST â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let toastTimer=null;
function showToast(msg){
  const toast=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove('show'),2600);
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  STATUS MANAGER BROWSER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function openStatusManagerModal(){
  if(!requirePermission('clients.status')) return;
  document.getElementById('statusBrowserSearch').value='';
  renderStatusBrowserList();
  document.getElementById('statusBrowserBackdrop').classList.add('open');
}
function closeStatusBrowser(){document.getElementById('statusBrowserBackdrop').classList.remove('open')}
function renderStatusBrowserList(){
  const q=(document.getElementById('statusBrowserSearch').value||'').toLowerCase();
  const list=document.getElementById('statusBrowserList');
  let data=[...CLIENTS];
  if(q) data=data.filter(c=>c.opid.toLowerCase().includes(q)||c.status.toLowerCase().includes(q)||c.product.toLowerCase().includes(q));
  data.sort((a,b)=>a.opid.localeCompare(b.opid));
  list.innerHTML=data.map(c=>`
    <div onclick="openStatusChange('${c.opid}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;border:1px solid #e2e8f0;cursor:pointer;transition:all 0.15s;background:#fff" onmouseover="this.style.background='#f8fafc';this.style.borderColor='#3b82f6'" onmouseout="this.style.background='#fff';this.style.borderColor='#e2e8f0'">
      <div style="font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:700;color:#1e293b;min-width:80px">${c.opid}</div>
      ${getProductBadge(c)}
      ${statusBadge(c.status)}
      <span style="margin-left:auto;font-size:11px;color:#94a3b8;font-weight:600">Change â€º</span>
    </div>
  `).join('');
}
function openStatusChange(opid){
  statusChangeTarget=opid;
  selectedNewStatus=null;
  const c=CLIENTS.find(x=>x.opid===opid);
  document.getElementById('scOpid').textContent=opid;
  document.getElementById('scCurrentStatus').innerHTML=statusBadge(c.status);
  document.querySelectorAll('.status-option').forEach(o=>o.classList.remove('sel'));
  document.querySelectorAll('.status-option input').forEach(i=>i.checked=false);
  document.getElementById('activationRow').classList.remove('show');
  document.getElementById('activationDate').value='';
  closeStatusBrowser();
  document.getElementById('statusChangeBackdrop').classList.add('open');
}
function selectStatus(val,el){
  document.querySelectorAll('.status-option').forEach(o=>o.classList.remove('sel'));
  el.classList.add('sel');
  el.querySelector('input').checked=true;
  selectedNewStatus=val;
  const row=document.getElementById('activationRow');
  if(val==='Active'){
    row.classList.add('show');
    document.getElementById('activationDate').value=new Date().toISOString().split('T')[0];
  } else row.classList.remove('show');
}
function applyStatusChange(){
  if(!requirePermission('clients.status')) return;
  if(!selectedNewStatus){alert('Please select a new status');return;}
  const c=CLIENTS.find(x=>x.opid===statusChangeTarget);
  if(!c) return;
  if(selectedNewStatus==='Active'){
    const dt=document.getElementById('activationDate').value;
    if(!dt){alert('Please enter the billing effective date for activation');return;}
    c.billingEffective=dt;
  }
  c.status=selectedNewStatus;
  closeStatusChange();
  renderAll();
  renderClientsTable();
  showToast('âœ… '+statusChangeTarget+' â†’ '+selectedNewStatus);
}
function closeStatusChange(){document.getElementById('statusChangeBackdrop').classList.remove('open')}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  EDIT DEAL BROWSER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function openEditDealBrowser(){
  if(!requirePermission('clients.deal')) return;
  document.getElementById('editDealSearch').value='';
  renderEditDealList();
  document.getElementById('editDealBrowserBackdrop').classList.add('open');
}
function closeEditDealBrowser(){document.getElementById('editDealBrowserBackdrop').classList.remove('open')}
function renderEditDealList(){
  const q=(document.getElementById('editDealSearch').value||'').toLowerCase();
  const list=document.getElementById('editDealBrowserList');
  let data=[...CLIENTS];
  if(q) data=data.filter(c=>c.opid.toLowerCase().includes(q)||c.product.toLowerCase().includes(q));
  data.sort((a,b)=>a.opid.localeCompare(b.opid));
  list.innerHTML=data.map(c=>`
    <div onclick="openEditDealForm('${c.opid}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;border:1px solid #e2e8f0;cursor:pointer;transition:all 0.15s;background:#fff" onmouseover="this.style.background='#faf5ff';this.style.borderColor='#a855f7'" onmouseout="this.style.background='#fff';this.style.borderColor='#e2e8f0'">
      <div style="font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:700;color:#1e293b;min-width:80px">${c.opid}</div>
      ${getProductBadge(c)}
      <span style="font-size:11px;color:#7c3aed;font-weight:700;font-family:'Rajdhani',sans-serif">â‚¹${c.rate} Â· ${formatPeriod(c.period)} Â· â‚¹${c.monthlyBill.toLocaleString('en-IN')}/mo</span>
      <span style="margin-left:auto;font-size:11px;color:#94a3b8;font-weight:600">Edit â€º</span>
    </div>
  `).join('');
}
function openEditDealForm(opid){
  editDealTarget=opid;
  const c=CLIENTS.find(x=>x.opid===opid);
  if(!c) return;
  document.getElementById('editDealOpid').textContent=opid;
  document.getElementById('editDealCurrentBadges').innerHTML=getProductBadge(c).replace('>', ' style="background:rgba(255,255,255,0.2);color:#fff;border-color:rgba(255,255,255,0.3)">');
  document.getElementById('ed-rate').value=c.rate;
  document.getElementById('ed-min').value=c.minBilling;
  document.getElementById('ed-period').value=String(c.period);
  document.getElementById('ed-freesms').value=c.freeSMS||'';
  document.getElementById('ed-rate-cur').textContent='Current: â‚¹'+c.rate;
  document.getElementById('ed-min-cur').textContent='Current: '+c.minBilling;
  const planField=document.getElementById('editProductTypeField');
  const planSelect=document.getElementById('ed-plan');
  if(c.product==='NetManazer'){
    planSelect.innerHTML='<option value="ISP">ISP</option>';
    planSelect.value='ISP';
    planField.style.opacity='0.65';
    planField.style.pointerEvents='none';
  } else if(c.product==='IPTV'){
    planSelect.innerHTML='<option value="IPTV">IPTV</option>';
    planSelect.value='IPTV';
    planField.style.opacity='0.65';
    planField.style.pointerEvents='none';
  } else {
    planSelect.innerHTML='<option value="Standard">Standard</option><option value="Pro">Pro</option>';
    planSelect.value=getProductTypeDisplay(c);
    planField.style.opacity='1';
    planField.style.pointerEvents='auto';
  }
  closeEditDealBrowser();
  liveEditPreview();
  document.getElementById('editDealFormBackdrop').classList.add('open');
}
function liveEditPreview(){
  const rate=parseFloat(document.getElementById('ed-rate')?.value)||0;
  const min=parseInt(document.getElementById('ed-min')?.value)||0;
  const period=parseInt(document.getElementById('ed-period')?.value)||1;
  if(rate>0 && min>0){
    const {base,tax,monthlyBill,salesDeal}=calcBilling(rate,min,period);
    document.getElementById('ep-formula').textContent=salesDeal;
    document.getElementById('ep-breakdown').innerHTML=
      `<b>Base:</b> â‚¹${base.toLocaleString('en-IN')}<br>`+
      `<b>GST (18%):</b> â‚¹${tax}<br>`+
      `<b>Monthly Bill:</b> â‚¹${monthlyBill.toLocaleString('en-IN')}<br>`+
      `<b>Contract (${formatPeriod(period)}):</b> â‚¹${(monthlyBill*period).toLocaleString('en-IN')}`;
  } else {
    document.getElementById('ep-formula').textContent='â€”';
    document.getElementById('ep-breakdown').textContent='Enter values above to see preview';
  }
}
function applyEditDeal(){
  if(!requirePermission('clients.deal')) return;
  const c=CLIENTS.find(x=>x.opid===editDealTarget);
  if(!c) return;
  const rate=parseFloat(document.getElementById('ed-rate').value);
  const min=parseInt(document.getElementById('ed-min').value);
  const period=parseInt(document.getElementById('ed-period').value);
  if(!rate||!min){alert('Rate and Min. Billing are required');return;}
  const {base,tax,monthlyBill,salesDeal}=calcBilling(rate,min,period);
  c.rate=rate;
  c.minBilling=min;
  c.period=period;
  c.baseAmount=base;
  c.tax=tax;
  c.monthlyBill=monthlyBill;
  c.salesDeal=salesDeal;
  c.freeSMS=document.getElementById('ed-freesms').value.trim()||null;
  if(c.product==='CNMS Onnet') c.productType=document.getElementById('ed-plan').value;
  else c.productType=getProductTypeDisplay(c);
  closeEditDealForm();
  renderAll();
  renderClientsTable();
  showToast('âœ… Deal updated for '+editDealTarget);
  setTimeout(()=>showToast('ðŸ“‹ Don\'t forget to save changes to GitHub!'),3500);
}
function closeEditDealForm(){document.getElementById('editDealFormBackdrop').classList.remove('open')}

// â”€â”€ RENDER ALL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderAll(){
  updateKPI();
  renderBarChart();
  renderDonut();
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeDetailModal();
    closeAddModal();
    closeStatusBrowser();
    closeStatusChange();
    closeEditDealBrowser();
    closeEditDealForm();
    closePasswordModal();
    closeUserManagerModal();
    closeClientsFlyout();
  }
});
renderAll();
initializeLogin();
