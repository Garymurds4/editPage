import React, { useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { sizing } from '@material-ui/system';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  typography: {
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [onOff, setOnOff] = useState(Boolean(true));
  
  const imSure=  e=>{
    e.preventDefault();
    setOnOff(false)
  }

  const handleChange = (event) => {

    const chooseAction = event.target.chooseAction;  
    const chooseAccountType = event.target.chooseAccountType;
    const chooseRiskRating = event.target.chooseRiskRating;
    const chooseFrequencyRecon = event.target.chooseFrequencyRecon;
    const chooseBlacklineTemplate = event.target.chooseBlacklineTemplate;

    setState({
      ...state,
      [chooseAccountType]: event.target.value,
    });
    setState({
      ...state,
      [chooseAction]: event.target.value,
    });
    setState({
      ...state,
      [chooseRiskRating]: event.target.value,
    });
    setState({
      ...state,
      [chooseFrequencyRecon]: event.target.value,
    });
    setState({
      ...state,
      [chooseBlacklineTemplate]: event.target.value,
    });
  };

  const [state, setState] = React.useState({
    chooseAction: '',
    chooseAccountType: '', 
    chooseRiskRating: '',
    chooseFrequencyRecon: '',
    chooseBlacklineTemplate: '',
  });
  


  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Add Account
        </Typography>  


        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5"className={classes.typography} >
          SAP Account
        </Typography>
          <Grid container spacing={1} >


          <Grid item xs={12} >
          <FormControl variant="outlined" size="small" fullWidth>
          <InputLabel htmlFor="outlined-age-native-simple">Action</InputLabel>
          <Select
            native
            value={state.name}
            onChange={handleChange}
            label="action"
            inputProps={{
              name: 'chooseAction',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="newAccount">New account</option>
            <option value="changeAccount">Change account</option>
            <option value="blockAccount">Block account</option>
            <option value="unblockAccount">Unblock account</option>
            <option value="markDeletion">Mark account for deletion</option>
            <option value="unmarkDeletion">Unmark account for deletion</option>
            <option value="openExistAccountNewCompany">Open existing account in new company</option>
          </Select>
          </FormControl>
          </Grid>


          <Grid item xs={12} >
          <FormControl variant="outlined" size="small" fullWidth>
          <InputLabel htmlFor="outlined-age-native-simple">Account type</InputLabel>
          <Select
            native
            value={state.name}
            onChange={handleChange}
            label="accountType"
            inputProps={{
              chooseAccountType: 'chooseAccountType',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="balanceSheet">Balance sheet</option>
            <option value="incomeStatement">Income statement</option>
            <option value="debtor">Debtor</option>
            <option value="creditor">Creditor</option>
          </Select>
          </FormControl>
          </Grid>


          
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="accountNo"
                name="accountNo"
                label="Account No"
                size="small"
                //type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="company"
                name="company"
                label="Company"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="currency"
                name="currency"
                label="Currency eg: ZAR"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="shortDescription"
                name="shortDescription"
                label="Short description"
                size="small"
                inputProps={{ maxLength: 20}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="longDescription"
                name="longDescription"
                label="Long description"
                size="small"
                inputProps={{ maxLength: 48}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="reconAccount"
                name="reconAccount"
                label="Recon account"
                size="small"
                type="number"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="tbAssignment"
                name="tbAssignment"
                label="TB assignment"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="refAccount"
                name="refAccount"
                label="Reference account"
                size="small"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="referenceCompany"
                name="referenceCompany"
                label="Reference company"
                size="small"
              />
            </Grid>
            <Grid item xs={12} width="6" >
              <TextField
                variant="outlined"
                fullWidth
                multiline
                id="reason"
                name="reason"
                label="Reason for opening or blocking accounts"
                size="small"
              />
            </Grid>  */}
        </Grid>


          {/* <Typography component="h1" variant="h5"className={classes.typography} >
          Recon Information
          </Typography>

          <Grid container spacing={1} >
            <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="clerkName"
                  name="clerkName"
                  label="Clerk name"
                  //autoComplete="address"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="clerkPersonnelNumber"
                  name="clerkPersonnelNumber"
                  label="Clerk personnel number"
                  //autoComplete="address"
                  required
                  size="small"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="managerName"
                  name="managerName"
                  label="Manager name"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="managerPersonnelNumber"
                  name="managerPersonnelNumber"
                  label="Manager personnel number"
                  required
                  size="small"
                  type="number"
                />
              </Grid>  
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="sbuHeadName"
                  name="sbuHeadName"
                  label="SBU head name"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="sbuHeadPersonnelNumber"
                  name="sbuHeadPersonnelNumber"
                  label="SBU head personnel number"
                  required
                  size="small"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="sbuName"
                  name="sbuName"
                  label="SBU name"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  id="reasonNotRecon"
                  name="reasonNotRecon"
                  label="Reason not reconciled/analysed:"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="analysed"
                  name="analysed"
                  label="Analysed "
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="reconciled"
                  name="reconciled"
                  label="Reconciled"
                  required
                  size="small"
                />
              </Grid>

              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="onDay"
                  name="onDay"
                  //label="On day"
                  autoComplete=""
                  required
                  size="small"
                  type="Date"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="onWorkingDay"
                  name="onWorkingDay"
                  label="OR on working day"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="busUse"
                  name="busUse"
                  label="Business use"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="busRules"
                  name="busRules"
                  label="Business rules"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="sourceData"
                  name="sourceData"
                  label="Source data"
                  required
                  size="small"
                />
              </Grid>
           </Grid>

          <Typography component="h1" variant="h5"className={classes.typography} >
          HFM Information
          </Typography>

          <Grid container spacing={1} >
           <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="accountNo"
                name="accountNo"
                label="Account No"
                //autoComplete="address"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="custom1"
                name="custom1"
                label="Custom 1"
                //autoComplete="address"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="custom2"
                name="custom2"
                label="Custom 2"
                //autoComplete="address"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="custom3"
                name="custom3"
                label="Custom 3"
                //autoComplete="address"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="custom4"
                name="custom4"
                label="Custom 4"
                //autoComplete="address"
                size="small"
              />
            </Grid>

          </Grid>

          <Typography component="h1" variant="h5"className={classes.typography} >
          Blackline Information
          </Typography>

          <Grid container spacing={1} >
           <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="uacfidPreparer"
                name="uacfidPreparer"
                label="UACFID Preparer"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="uacfidReviewer"
                name="uacfidReviewer"
                label="UACFID Reviewer"
                size="small"
              />
            </Grid>


              <Grid item xs={12} >
                <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="outlined-age-native-simple"> Risk rating of account</InputLabel>
                <Select
                  native
                  value={state.name}
                  onChange={handleChange}
                  label="riskRatingOfAccount"
                  inputProps={{
                    chooseRiskRating: 'chooseRiskRating',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Select>
                </FormControl>
              </Grid>


              <Grid item xs={12} >
                <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel htmlFor="outlined-age-native-simple"> Frequency of the reconciliation</InputLabel>
                <Select
                  native
                  value={state.name}
                  onChange={handleChange}
                  label="frequencyOfTheReconciliation"
                  inputProps={{
                    chooseFrequencyRecon: 'chooseFrequencyRecon',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  
                </Select>
                </FormControl>
              </Grid>


            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="purposeOfAccount"
                name="purposeOfAccount"
                label="Purpose of the account"
                size="small"
                inputProps={{ maxLength: 48}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                id="reconProcedure"
                name="reconProcedure"
                label="Reconciliation procedure"
                size="small"
                inputProps={{ maxLength: 200}}
              />
            </Grid>


                <Grid item xs={12} >
                    <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel htmlFor="outlined-age-native-simple">Blackline template</InputLabel>
                    <Select
                    native
                    value={state.name}
                    onChange={handleChange}
                    label="blacklineTemplate"
                    inputProps={{
                        chooseBlacklineTemplate: 'chooseBlacklineTemplate',
                        id: 'outlined-age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value="accruable">Accruable</option>
                    <option value="amortizable">Amortizable</option>
                    <option value="associatedAccounts">Associated Accounts</option>
                    <option value="bankAccount">Bank Account</option>
                    <option value="generalList">General List</option>
                    <option value="scheduleList">Schedule List</option>
                    <option value="subledgerMatch">Subledger Match</option>
                    
                    </Select>
                    </FormControl>
              </Grid>

            <Grid item xs={12} >
                    <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel htmlFor="outlined-age-native-simple">Blackline Team</InputLabel>
                    <Select
                    native
                    value={state.name}
                    onChange={handleChange}
                    label="blacklineTeam"
                    inputProps={{
                        chooseBlacklineTeam: 'chooseBlacklineTeam',
                        id: 'outlined-age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value="G-FinExe">G-Finance Executive</option>
                    <option value="LHLCON">Liberty Holdings</option>
                    <option value="G-CostMgmt">G-Cost Management</option>
                    <option value="G-FINOPS">G-Finance OPS</option>
                    <option value="M-FinExe">M-Finance Execution</option>
                    <option value="M-Other">M-Other Finance</option>
                    <option value="M-CostR">M-Cost Reporting </option>
                    <option value="M-Retail">M-Retail Finance </option>
                    <option value="M-STANLIB">Stanlib </option>
                    <option value="ACCPAY">Accounts Payable </option>
                    <option value="CCCAE">Cost Control CAE </option>
                    <option value="CCIT">Cost Control IT </option>
                    <option value="CCManex">Cost Control Manex </option>
                    <option value="CCOPS">Cost control Operations </option>
                    <option value="CCSC">Super Commissions </option>
                    <option value="COMM">Commissions </option>
                    <option value="FRANK">FRANK.NET </option>
                    <option value="GBKL">SCollective </option>
                    <option value="GP1">GP1 </option>
                    <option value="GP2">GP2 </option>
                    <option value="GRESS">WPM Finance </option>
                    <option value="GRPFIN">Group Finance </option>
                    <option value="HRFIN">HR Finance </option>
                    <option value="INVACC">Investment accounting </option>
                    <option value="LASM">SAsset Mger </option>
                    <option value="LDST">SMulti Mger </option>
                    <option value="LIBCORP">Liberty Corporate </option>
                    <option value="LIBFIN">Libfin Finance </option>
                    <option value="LISP">LISP </option>
                    <option value="MFCL">SWealth Mger </option>
                    <option value="MHLD">STANLIB Limited </option>
                    <option value="REINSURE">Re-insurance </option>
                    <option value="RETAIL-B">Retail Bank Admin </option>
                    <option value="RETAIL-OP">Retail Ops Finance </option>
                    <option value="SFMJ">SJersery </option>
                    <option value="SLES">SLESOTHO </option>
                    <option value="TAX">Group Tax </option>
                    </Select>
                    </FormControl>
              </Grid>

          </Grid> */}

          <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" onClick={imSure} />}
                label="Accept changes"
              />
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={onOff}
          >
            ADD
          </Button>
          <Grid container justify="flex-end">
            
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}